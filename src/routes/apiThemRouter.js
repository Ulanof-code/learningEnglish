import express from 'express';
import { Theme } from '../../db/models';

const apiThemRouter = express.Router();

apiThemRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Theme.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

apiThemRouter.get('/:id', async (req, res) => {

});

export default apiThemRouter;
