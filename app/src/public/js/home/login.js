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
  });
};

loginBtn.addEventListener('click', login);
