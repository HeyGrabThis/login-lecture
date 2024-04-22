'use strict';
//file system불러오기 => 파일에 있는 데이터 가져오기 위해/ .promises붙이면 promise객체를 반환함.
// const fs = require('fs').promises;

// 데이터베이스 임포트
const db = require('../config/db');

class UserStorage {
  //id를 넣었을 때 그 user의 모든 정보를 담은 객체 생성
  static getUserInfo(id) {
    //mysql은 그 자체로 promise 객체가 아니므로 promise객체를 만들어서 resolve와 reject로 반환후, 이 promise 객체를 return
    return new Promise((resolve, reject) => {
      //quary매서드로 query문을 보낼 수 있음. 보안상의 이유로 ?와 [넣을 변수]이런식으로 작성
      const query = 'SELECT * FROM a WHERE id = ?;';
      db.query(query, [id], (err, data) => {
        //err가 객체로 반환되므로 문자열로 바꿔주기 위해${}형식으로 바꾸어준다
        if (err) reject(`${err}`);
        //data를 보면 배열로 감싸져있기 때문에 그 첫번째 값을 반환해준다
        else resolve(data[0]);
      });
    });
  }

  //회원가입
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      //quary매서드로 query문을 보낼 수 있음. 보안상의 이유로 ?와 [넣을 변수]이런식으로 작성
      const query = 'INSERT INTO users(id, name, password) VALUE(?, ?, ?);';
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          //err가 객체로 반환되므로 문자열로 바꿔주기 위해${}형식으로 바꾸어준다
          if (err) reject(`${err}`);
          //INSERT하는 것이기 때문에 data인자가 필요하지 않다.
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
