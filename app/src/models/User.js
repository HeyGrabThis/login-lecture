'use strict';
const UserStorage = require('./UserStorage');

// 요청 body를 받으면 그 User를 하나 생성해주는 인스턴스
class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    //body의 id를 넣어 유저의 데이터를 가져오는 UserStorage의 getUserInfo함수 호출
    const { id, passward } = UserStorage.getUserInfo(this.body.id);

    //입력한 id가 데이터에 있는 id면
    if (id) {
      //id와 비밀번호 모두 일치하는지
      if (id === this.body.id && passward === this.body.passward) {
        return { success: true };
      } else {
        return { success: false, msg: '비밀번호가 일치하지 않습니다.' };
      }
    } else {
      //입력한 id가 데이터에 아예없다면
      return { success: false, msg: '존재하지 않는 아이디입니다' };
    }
  }
}

module.exports = User;
