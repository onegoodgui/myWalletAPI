import db from "../db.js";

export default async function verifyUserExistence(email){

    const existentUser = await db.collection('users').findOne({email: email})

    if(existentUser){
        return 'E-mail já cadastrado'
    }
}