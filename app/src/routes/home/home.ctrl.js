'use strict';
const home = (req, res) => {
  //렌더 경로 설정
  res.render('home/index');
};

const login = (req, res) => {
  res.render('home/login');
};

module.exports = { home, login };
