'use strict';
// express 가져오고 router가져오기
const express = require('express');
const router = express.Router();

//home.ctrl파일에서 임포트(가져오기)
const ctrl = require('./home.ctrl');

//루트 경로를 만들어줌 => 그냥 3000번으로 접속했을 때
router.get('/', ctrl.view.home);

router.get('/login', ctrl.view.login);

router.get('/register', ctrl.view.register);

// 로그인 정보 처리 api
router.post('/login', ctrl.process.login);

// export 해주기
module.exports = router;
