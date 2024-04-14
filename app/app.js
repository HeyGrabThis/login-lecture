'use strict';
// require로 express모듈 다운받기
const express = require('express');
// express실행시켜 변수안에 넣기
const app = express();

// 라우팅. home이라는 변수 만들어서 경로 추가해줘서 index.js 읽을 수 있게
const home = require('./src/routes/home');

//앱 세팅
//views => 화면 view를 관리해줄 폴더 경로를 오른쪽에 적으면된다.
app.set('views', './src/views');
//view를 어떤 엔진으로 해석해줄지. ejs엔진으로 해석(html과 비슷)
app.set('view engine', 'ejs');
//login.js 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`));

//use는 미들웨어를 등록해주는 메서드. '/'경로로 오면 home으로 이동해라
app.use('/', home);

//www.js에서 쓸 app export하기
module.exports = app;
