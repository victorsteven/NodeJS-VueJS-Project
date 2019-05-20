import Joi from 'joi';

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    };
    const { error, value } = Joi.validate(req.body, schema);

    // eslint-disable-next-line no-empty
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          });
          break;
        case 'password':
          res.status(400).send({
            error: `The password did not match the following:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters
            `
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          });
          break;
      }
    } else {
      next();
    }
  }
};
