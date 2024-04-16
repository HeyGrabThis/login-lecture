class UserStorage {
  static #users = {
    id: ['qwer', 'asdf', 'zxcv'],
    password: ['1234', '1234', '123456'],
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

  //id를 넣었을 때 그 user의 모든 정보를 담은 객체 생성
  static getUserInfo(id) {
    const users = this.#users;
    const usersKeys = Object.keys(users); // => [id,password,name]
    const idx = users.id.indexOf(id);
    //id, password, name을 돌면서 id idx에 해당하는 값만 가지고와서 객체 만들기
    const userInfo = usersKeys.reduce((a, b) => {
      a[b] = users[b][idx];
      return a;
    }, {});
    return userInfo;
  }

  //회원가입
  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    return { success: true };
  }
}

module.exports = UserStorage;
