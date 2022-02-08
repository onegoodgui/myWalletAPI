import express, {json} from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
app.use(json());
app.use(cors({ origin: process.env.MONGO_URI, credentials: true }));

app.use(router);


app.listen(process.env.PORT, () => {
    console.log('Server is listening on port' + process.env.PORT);
  });