import AuthenticationController from './controllers/AuthenticationController';
import SongsController from './controllers/SongsController';


import AuthenticationControllerPolicy from './policies/AuthenticationControllerPolicy';


module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);

  app.post('/login', AuthenticationController.login);

  app.get('/songs', SongsController.index);

  app.post('/songs', SongsController.post);

  app.get('/songs/:songId', SongsController.show);
};
