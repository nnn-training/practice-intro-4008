'use strict';
const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res, next) => {
  const [one, five, fifteen] = os.loadavg();

  res.json({ loadavg: { '1min': one, '5min': five, '15min': fifteen } });
});

module.exports = router;
