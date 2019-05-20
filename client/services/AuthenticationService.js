import Api from './Api.js';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  }
}

// AuthenticationService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// });