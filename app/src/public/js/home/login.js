'use strict';

const id = document.querySelector('#id');
const passward = document.querySelector('#passward');
const loginBtn = document.querySelector('#loginBtn');

const login = () => {
  const req = {
    id: id.value,
    passward: passward.value,
  };
  console.log(req);
};

loginBtn.addEventListener('click', login);
