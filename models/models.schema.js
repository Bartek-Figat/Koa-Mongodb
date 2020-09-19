class User {
  static create({ name, password }) {
    return {
      name,
      password,
    };
  }
}

module.exports = {
  User,
};
