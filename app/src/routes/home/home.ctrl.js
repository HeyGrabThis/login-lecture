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
  register: (req, res) => {
    res.render('home/register');
  },
};

//프로세스
const process = {
  //User.js의 login도 promise를 반환하기에 async await작성
  login: async (req, res) => {
    //req.body를 보내서 인스턴스 생성
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

module.exports = { view, process };
