'use strict';
//app.js에서 app 가져오기
const app = require('../app');
//환경변수 PORT변수에서 가져오고 값이 없으면 3000
const PORT = process.env.PORT || 3000;

//listen 명령어로 서버 뚫기. 3000번 포트로 열어달라, 두번째 인자는 콜백함수. PORT라는 변수로 따로 빼는 것이 일반적
app.listen(PORT, () => {
  console.log('서버가동');
});
