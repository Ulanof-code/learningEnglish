import express from "express";
import {User} from '../../db/models';
import bcrypt from 'bcrypt';
const apiUserRouter =express.Router()

apiUserRouter.post('/signup', async(req,res)=>{
    try{
        const {password , email, name, } = req.body;
        console.log(password,email,name);
        const hashPass= await bcrypt.hash(password, 10)
        console.log( hashPass);
        const [user, create] = await User.findOrCreate({
            where: { email },
            defaults: {
              password: hashPass,
              name,
            },
          });
        // if(!create){
        //     return res.status(401).send('Этот пользователь уже зарегистрирован')
        // }
        console.log(1)
        req.session.user= user;
        console.log(req.session.user)
        return res.sendStatus(200)
    } catch(error){
        console.log(error
            );
        return res.sendStatus(500)
    }
})

export default apiUserRouter