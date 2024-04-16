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

//더미 데이터
const users = {
  id: ['qwer', 'asdf', 'zxcv'],
  passward: ['1234', '1234', '123456'],
};
//프로세스
const process = {
  login: (req, res) => {
    const id = req.body.id;
    const passward = req.body.passward;
    //users id에 프론트에서 넘어온 id가 있다면
    if (users.id.includes(id)) {
      //인덱스 저장
      const idx = users.id.indexOf(id);
      //그 인덱스랑 같은 비밀번호가 맞는지 => 맞다면 success:true객체 반환
      if (users.passward[idx] === passward) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인에 실패하였습니다.',
    });
  },
};

module.exports = { view, process };
