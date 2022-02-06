import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';
import verifyUserExistence from '../services/verify.js';

export async function signUp(req, res) {
  const user = req.body;

  const passwordHash = bcrypt.hashSync(user.password, 10);
  const warning = await verifyUserExistence(user.email);

  if (warning === 'E-mail já cadastrado'){
      return res.status(401).send('E-mail já cadastrado');
  }
  await db.collection('users').insertOne({ ...user, password: passwordHash })

  res.status(201).send('Ok!');
}

export async function Login(req, res) {
  const { email, password } = req.body;

  const user = await db.collection('users').findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    const currentSession = { token, user:{ userId: user._id, name: user.name }};
    await db.collection('sessions').insertOne(currentSession);

    res.send(currentSession);
  } 
  else {
    res.sendStatus(401);
  }
}