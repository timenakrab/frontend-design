const express = require('express');
const next = require('next');
const fs = require('fs');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(useragent.express());
    server.use((req, res, nextFlow) => {
      try {
        decodeURIComponent(req.path);
      } catch (e) {
        return res.status(404).send('Not found');
      }
      return nextFlow();
    });
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/robots.txt', (req, res) => {
      res.type('text/plain');
      const fileContent = fs.readFileSync('./robots.txt', 'utf8');
      res.send(fileContent);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
