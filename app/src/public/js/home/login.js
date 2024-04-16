'use strict';

const id = document.querySelector('#id');
const passward = document.querySelector('#passward');
const loginBtn = document.querySelector('#loginBtn');

const login = () => {
  const req = {
    id: id.value,
    passward: passward.value,
  };
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('로그인중 에러발생'));
    });
};

loginBtn.addEventListener('click', login);
