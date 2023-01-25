import express from "express"
import bcrypt from 'bcrypt';
import {User} from '../../db/models'

const router = express.Router();


router.get('/', (req,res)=>{
    res.render('Layout')
})

router.get('/signup', (req,res)=>{
    res.render("Layout")
})



router.post('/', async (req,res)=>{
    try{
        const {email, pass}= req.body
        const foundUser = await User.findOne({
            where:{ email },
        })
        if(!(foundUser && await bcrypt.compare(pass, foundUser.password))){
            return res.sendStatus(401)
        }
        const user= JSON.parse(JSON.stringify(foundUser.password))
        delete user.hashPass
        req.session.user = user
        return res.sendStatus(200)
    } catch (err){
        console.log(err, '<=======================');
        return res.sendStatus(501)
    }
})
export default router