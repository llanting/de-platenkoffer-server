require('dotenv').config();
require('./configs/database.config');

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const cors         = require('cors')

const app = express();

app.use(session({
  secret: 'platenkoffer',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 60*60*24*1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60,
    autoRemove: 'disabled',
  })
})); 

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Middleware Setup
app.use(logger('dev'));
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
app.use(express.static(path.join(__dirname, 'public')));


const authRoutes = require('./routes/auth.routes');
app.use('/api', authRoutes);

const MusicRoutes = require('./routes/spotify.routes');
app.use('/api', MusicRoutes);

const AlbumRoutes = require('./routes/album.routes');
app.use('/api', AlbumRoutes);

module.exports = app;
