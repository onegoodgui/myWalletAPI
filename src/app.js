import express, {json} from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
app.use(json());
app.use(cors({ origin: '*' }));
app.options('*', cors())

app.use(router);

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port' + process.env.PORT);
  });