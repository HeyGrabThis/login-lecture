'use strict';

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const registerBtn = document.querySelector('#registerBtn');

const register = () => {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };
  console.log(req);
  fetch('/register', {
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
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입중 에러발생'));
    });
};

registerBtn.addEventListener('click', register);
