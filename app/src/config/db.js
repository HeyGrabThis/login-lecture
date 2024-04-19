const mysql = require('mysql');

//노출되면 안되는 정보이기 때문에 환경변수에서 가져온다. =>환경변수로 요청하면 mysql에 접근 안되는 이슈(host문제인듯.외부접근 허용문제)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6632',
  database: 'login_lecture',
});

//connect매서드로 연결 요청
db.connect();

module.exports = db;
