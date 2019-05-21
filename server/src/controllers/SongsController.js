const { Song } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      // const song = Song.create(req.body);
      const songs = await Song.findAll({
        limit: 10
      });
      res.send(songs);
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to get songs'
      });
    }
  },

  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to create songs'
      });
    }
  },

  async show(req, res) {
    try {
      console.log('this is the id: ', req.params.songId);
      const song = await Song.findByPk(req.params.songId);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to get this song'
      });
    }
  },
};
