'use strict';
//file system불러오기 => 파일에 있는 데이터 가져오기 위해/ .promises붙이면 promise객체를 반환함.
const fs = require('fs').promises;

class UserStorage {
  //isAll파라미터도 받아서 isAll이 true면 모든 데이터 값 받아오게끔
  static getUsers(isAll, ...fields) {
    //fs에 맞추어 getUsers수정
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        const users = JSON.parse(data);
        //isAll이 true면 모든 데이터 값 받아오게끔 =>바로 리턴
        if (isAll === true) return users;
        const newUsers = fields.reduce((a, b) => {
          if (users.hasOwnProperty(b)) {
            a[b] = users[b];
          }
          return a;
        }, {});
        return newUsers;
      })
      .catch((err) => {
        console.error(err);
      });
    // const users = this.#users;
  }

  //id를 넣었을 때 그 user의 모든 정보를 담은 객체 생성
  static getUserInfo(id) {
    //file system으로 파일 읽기 => 경로는 메인파일인 app.js기준. promise객체를 반환하기 때문에 then과 catch로 접근 가능
    //return으로 getUserInfo함수를 실행했을 때 User.js로 최종적으로 return하는 값을 만들어준다.
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        const users = JSON.parse(data);
        const usersKeys = Object.keys(users); // => [id,password,name]
        const idx = users.id.indexOf(id);
        //id, password, name을 돌면서 id idx에 해당하는 값만 가지고와서 객체 만들기
        const userInfo = usersKeys.reduce((a, b) => {
          a[b] = users[b][idx];
          return a;
        }, {});
        return userInfo;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //회원가입
  static async save(userInfo) {
    //이 파일안에 있는 getUsers매서드로 user.json파일안의 모든 값(true면 모든 값 가져오게끔 해둠) 가져오기
    const users = await this.getUsers(true);
    //아이디가 이미 존재하면
    if (users.id.includes(userInfo.id)) {
      throw '이미 존재하는 아이디입니다';
    }
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    //writeFile매서드로 fs수정가능. 첫번째는 경로, 두번째인자는 수정할 내용(수정할 내용은 문자열 또는 JSON데이터여야함)
    fs.writeFile('./src/databases/users.json', JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
