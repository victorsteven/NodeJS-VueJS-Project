import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8082;

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  });
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
