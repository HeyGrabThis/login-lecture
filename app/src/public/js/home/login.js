'use strict';

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');

const login = () => {
  const req = {
    id: id.value,
    password: password.value,
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
