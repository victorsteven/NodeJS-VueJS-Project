import Api from './Api.js';

export default {
  index() {
    return Api().get('songs');
  },

  post(song) {
    return Api().post('songs', song);
  },

  show(songId) {
    return Api().get(`songs/${songId}`)
  },

  put(song) {
    return Api().put(`songs/${song.id}/update`, song)
  }
}