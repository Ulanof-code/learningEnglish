import express from "express"
import bcrypt from 'bcrypt';
import { User, Theme } from '../../db/models'

const renderUserRouter = express.Router();


// renderUserRouter.get('/', (req,res)=>{
//     res.render('Layout')
// })

renderUserRouter.get('/', (req, res) => {
  res.render("Layout")
})



// renderUserRouter.post('/', async (req,res)=>{
//     try{
//         const {email, pass}= req.body
//         const foundUser = await User.findOne({
//             where:{ email },
//         })
//         if(!(foundUser && await bcrypt.compare(pass, foundUser.password))){
//             return res.sendStatus(401)
//         }
//         const user= JSON.parse(JSON.stringify(foundUser.password))
//         delete user.hashPass
//         req.session.user = user
//         return res.sendStatus(200)
//     } catch (err){
//         console.log(err, '<=======================');
//         return res.sendStatus(501)
//     }
// })
renderUserRouter.get('/thems', async (req, res) => {
  const allThemes = await Theme.findAll({
    order: [['createdAt', 'DESC']], // тут сортировка чтоб отображались по убыванию карты
  });
  console.log(allThemes);
  const initState = { allThemes };
  res.render('Layout', initState);
});
export default renderUserRouter