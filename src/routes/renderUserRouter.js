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
export default renderUserRouter;

renderUserRouter.get('/signup', (req, res) => {
  res.render('Layout');
});

renderUserRouter.get('/theme/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const allCards = await Card.findAll({ where: { themeId: id, learned: false } });
  console.log(allCards);
  const initState = { allCards };
  console.log(allCards);
  res.render('Layout', initState);
});
