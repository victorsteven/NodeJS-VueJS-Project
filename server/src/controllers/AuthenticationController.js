import jwt from 'jsonwebtoken';
import config from '../config/config';

const { User } = require('../models');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email
        }
      });
      // console.log('this is the user: ', user);

      if (!user) {
        return res.status(403).send({
          error: 'The Login Information was incorrect'
        });
      }

      // const isPasswordValid = password === user.password;
      const isPasswordValid = await user.comparePassword(password);

      // console.log('this is the compare result: ', isPasswordValid);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password  was incorrect'
        });
      }


      const userJson = user.toJSON();
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      return res.status(500).send({
        error: 'Error in login. '
      });
    }
  }
};
