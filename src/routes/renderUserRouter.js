import express from 'express';
import bcrypt from 'bcrypt';
import { User, Theme, Card } from '../../db/models';

const renderUserRouter = express.Router();

renderUserRouter.get('/', (req, res) => {
  res.render('Layout');
});

renderUserRouter.get('/thems', async (req, res) => {
  const allThemes = await Theme.findAll({
    order: [['createdAt', 'DESC']], // тут сортировка чтоб отображались по убыванию карты
  });
  const initState = { allThemes };
  res.render('Layout', initState);
});

renderUserRouter.get('/signup', (req, res) => {
  res.render('Layout');
});

renderUserRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const allCards = await Card.findAll({ where: { themeId: id, learned: false } });
    console.log(allCards);
    const initState = { allCards };
    console.log(allCards);
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
  }
});

renderUserRouter.get('/user/lk', (req, res) => {
  res.render('Layout');
});

export default renderUserRouter;
