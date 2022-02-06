import db from '../db.js';
import { ObjectId } from 'mongodb';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo")

export async function postEarning(req, res) {

    const user = res.locals.user;
    const transaction = res.locals.transaction;
    const dummyObj = {transaction, userId: user._id }
    let time = dayjs(Date.now()).format('DD/MM');
    dummyObj.time = time;

    try{
      await db.collection('transactions').insertOne(dummyObj);
      const storedEarning = await db.collection('transactions').find({}).sort({_id:-1}).limit(1).toArray();
      res.locals.earnId = storedEarning[0]._id;   
      res.sendStatus(200);
    }
    catch(error){
      res.status(500).send(error);
    }
  }
  
  export async function postExpense(req, res) {

    const user = res.locals.user;
    const transaction = res.locals.transaction;
    const dummyObj = {transaction, userId: user._id }
    let time = dayjs(Date.now()).format('DD/MM');
    dummyObj.time = time;
    

    try{
      await db.collection('transactions').insertOne(dummyObj);
      const storedExpense = await db.collection('transactions').find({}).sort({_id:-1}).limit(1).toArray();
      res.locals.expenseId = storedExpense[0]._id;   
      res.sendStatus(200);
    }
    catch(error){
      res.status(500).send(error);
    }
  }

  export async function getAllTransactions(req, res) {

    const user = res.locals.user;

    try{
      const list = await db.collection('transactions').find({}).toArray();
      console.log(list);
      const earnings = await db.collection('transactions').find({userId: ObjectId(user._id)}).toArray();
      res.status(200).send(earnings);
    }
    catch(error){
      res.status(500).send(error);
    }
  }

