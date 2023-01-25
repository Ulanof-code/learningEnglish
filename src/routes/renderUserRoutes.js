import express from "express"
import bcrypt from 'bcrypt';


const router = express.Router();


router.get('/', (req,res)=>{
    res.render('Layout')
})

router.get('/signup', (req,res)=>{
    res.render("Layout")
})
export default router