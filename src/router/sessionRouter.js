const express = require('express');
const sessionRouter = express.Router();
const sessions = require('../data/sessions.json');


sessionRouter.route('/').get((req, res) => {
  res.render('sessions', { sessions });
});

sessionRouter.route("/:id").get((req, res) => {

  res.render('session', {
    session: sessions[req.params.id]
  },
  );
});


module.exports = sessionRouter;   