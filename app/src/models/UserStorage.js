class UserStorage {
  static #users = {
    id: ['qwer', 'asdf', 'zxcv'],
    passward: ['1234', '1234', '123456'],
    name: ['제임스', '콜', '맥', '윌리엄'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((a, b) => {
      if (users.hasOwnProperty(b)) {
        a[b] = users[b];
      }
      return a;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
