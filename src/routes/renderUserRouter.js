import express from "express"
import bcrypt from 'bcrypt';
import {User, Theme} from '../../db/models'

const renderUserRouter = express.Router();




renderUserRouter.get('/', (req,res)=>{
    res.render("Layout")
})




renderUserRouter.get('/themes', async (req, res) => {
    const allThemes = await Theme.findAll({
      order: [['createdAt', 'DESC']], // тут сортировка чтоб отображались по убыванию карты
    });
    const initState = { allThemes };
    res.render('Layout', initState);
  });

  renderUserRouter.get('/user/lk', (req,res)=>{
    res.render('Layout')
  })
export default renderUserRouter 




