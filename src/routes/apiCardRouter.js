import express from 'express';
import { Card } from '../../db/models';

const apiCardRouter = express.Router();

apiCardRouter.post('/cardupdate/:id', async (req, res) => {
  const { id } = req.params;
  const mycard = await Card.findOne({ where: { id } });
  mycard.learned = true;
  mycard.save();
});

export default apiCardRouter;
