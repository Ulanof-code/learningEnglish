import express from 'express';
import { Theme } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, background } = req.body;
    const theme = await Theme.create({
      title,
      background,
    });
  } catch (err) {
    console.log(err, '<=======================');
    return res.sendStatus(501);
  }
});

export default router;
