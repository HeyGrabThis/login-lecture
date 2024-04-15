'use strict';
// require로 express모듈 다운받기
const express = require('express');
// express실행시켜 변수안에 넣기
const app = express();
//body-parser body데이터를 파싱해주는 모듈
const bodyParser = require('body-parser');

// 라우팅. home이라는 변수 만들어서 경로 추가해줘서 index.js 읽을 수 있게
const home = require('./src/routes/home');

//앱 세팅
//views => 화면 view를 관리해줄 폴더 경로를 오른쪽에 적으면된다.
app.set('views', './src/views');
//view를 어떤 엔진으로 해석해줄지. ejs엔진으로 해석(html과 비슷)
app.set('view engine', 'ejs');
//login.js 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`));
//body-parser 미들웨어 등록 ->body-parser가 json데이터를 파싱해올 수 있도록
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

//use는 미들웨어를 등록해주는 메서드. '/'경로로 오면 home으로 이동해라
app.use('/', home);

//www.js에서 쓸 app export하기
module.exports = app;
