import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
// import sequelize from './models';
import config from './config/config';

const { sequelize } = require('./models');

// console.log('this is me: ', sequelize);

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on PORT ${config.port}`);
  });
});
