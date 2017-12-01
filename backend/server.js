import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/crudwithredux';

function validate(data) {
  let errors = {};
  if(!data.title) errors.title = "Can't be empty";
  if(!data.cover) errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return ({ errors, isValid })
}

mongodb.MongoClient.connect(dbUrl, function(err, db) {
  app.get('/api/gamesreq', (req, res) => {
      db.collection('games').find({}).toArray((err, games) => {
        res.json({ games });
      });
  });

  app.post('/api/gamesreq', (req, res) => {
    const { errors, isValid } = validate(req.body);
    if(isValid) {
      const { title, cover } = req.body;
      db.collection('games').insert({ title, cover }, (err, result) => {
        if(err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ game: result.ops[0] });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  })

  app.put('/api/gamesreq/:id', (req, res) => {
    const { errors, isValid } = validate(req.body);

    if(isValid) {
      const { title, cover } = req.body;
      db.collection('games').findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params.id) },
        { $set: { title, cover} },
        { returnOriginal: false },
        (err, result) => {
          if(err) { res.status(500).json({ errors: { global: err }}); return; }

          res.json({ game: result.value });
        }
      );
    } else {
      res.status(400).json({ errors });
    }
  })

  app.get('/api/gamesreq/:id', (req, res) => {
    db.collection('games').findOne({ _id: new mongodb.ObjectId(req.params.id)}, (err, game) => {
      res.json({ game });
    });
  });

  app.delete('/api/gamesreq/:id', (req, res) => {
    db.collection('games').deleteOne({ _id: new mongodb.ObjectID(req.params.id)}, (err, result) => {
      if(err) {

      } else {
        res.json({})
      }
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    })
  });

  
  app.listen(8080, () => console.log('Server is running on port 8080...'));

});

