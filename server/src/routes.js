import AuthenticationController from './controllers/AuthenticationController';

import AuthenticationControllerPolicy from './policies/AuthenticationControllerPolicy';


module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);

  app.post('/login', AuthenticationController.login);
};
