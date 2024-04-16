'use strict';

//User 임포트
const User = require('../../models/User');

//렌더 경로 설정
const view = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

//프로세스
const process = {
  login: (req, res) => {
    //req.body를 보내서 인스턴스 생성
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = { view, process };
