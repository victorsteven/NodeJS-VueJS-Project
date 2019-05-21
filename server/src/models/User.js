const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  // eslint-disable-next-line consistent-return
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then((hash) => {
      console.log('this is the value for the hash: ', hash);
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  });

  // the  prototype method: 'comparePassword' is called by any user model
  // eslint-disable-next-line func-names
  User.prototype.comparePassword = function (password) {
    console.log('this is the password from parameter: ', password);
    // console.log('this is the current passwword: ', this.password);
    return bcrypt.compareAsync(password, this.password);
  };

  return User;
};
