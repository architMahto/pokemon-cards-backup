
import express from 'express';
import path from 'path';
import { configRoutes } from './routes';

require('babel-core/register');
require('babel-polyfill');

const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const httpsRedirect = require('express-https-redirect');
const logger = require('morgan');

require('dotenv').config();

const dbConnector = require('./dbConnector');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV;
const app = express();
const pathToBuildDir = path.resolve(__dirname, '..', 'build');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(compression());
app.use('/', httpsRedirect());

configRoutes(app);

if (NODE_ENV === 'production') {
    app.use('/', express.static(pathToBuildDir));

    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(pathToBuildDir, 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
