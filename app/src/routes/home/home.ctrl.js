'use strict';

//User 임포트
const User = require('../../models/User');
//logger 임포트
const logger = require('../../config/logger');

//렌더 경로 설정
const view = {
  home: (req, res) => {
    logger.info(`GET / 200 '홈 화면으로 이동'`);
    res.render('home/index');
  },
  login: (req, res) => {
    logger.info(`GET /login 200 '로그인 화면으로 이동'`);
    res.render('home/login');
  },
  register: (req, res) => {
    logger.info(`GET /register 200 '회원가입 화면으로 이동'`);
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
    if (response.err) {
      logger.error(
        `POST /login 200 Response: 'success:${response.success}, ${response.err}'`
      );
    } else {
      logger.info(
        `POST /login 200 Response: 'success:${response.success}, msg:${response.msg}'`
      );
    }
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err) {
      logger.error(
        `POST /register 200 Response: 'success:${response.success}, ${response.err}'`
      );
    } else {
      logger.info(
        `POST /register 200 Response: 'success:${response.success}, msg:${response.msg}'`
      );
    }
    return res.json(response);
  },
};

module.exports = { view, process };
