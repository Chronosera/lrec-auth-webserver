const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // the routes are defined here
  router.post('/AddUsers', (req, res, next) => {
    db.query(
      'INSERT INTO Users (RFID, firstName, lastName, program, teamNumber, isAdmin, fabAccess) VALUES (?,?,?,?,?,?,?)',
      [req.body.RFID, req.body.firstName, req.body.lastName, req.body.program, req.body.teamNumber, req.body.isAdmin, req.body.fabAccess],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json({ status: 'ok' });
        }
      }
    );
  });

  router.get('/Users', function (req, res, next) {
    db.query(
      'SELECT * FROM Users',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/Users/:RFID', function (req, res, next) {
    db.query(
      'UPDATE events SET firstName=?, lastName=?, program=?, teamNumber=?, isAdmin=?, fabAccess=? WHERE RFID=?',
      [req.body.firstName, req.body.lastName, req.body.program, req.body.teamNumber, req.body.isAdmin, req.body.fabAccess, req.params.RFID],
      (error) => {
        if (error) {
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json({ status: 'ok' });
        }
      }
    );
  });

  router.delete('/event/:RFID', function (req, res, next) {
    db.query(
      'DELETE FROM events WHERE id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json({ status: 'ok' });
        }
      }
    );
  });
  return router;
}

module.exports = createRouter;


