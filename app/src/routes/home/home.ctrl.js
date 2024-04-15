'use strict';

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
    console.log(req.body);
  },
};

module.exports = { view, process };
