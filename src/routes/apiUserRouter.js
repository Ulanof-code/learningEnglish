import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiUserRouter = express.Router();

// apiUserRouter.get('/', (req, res) => {
//   res.render('Layout');
// });

apiUserRouter.post('/', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    //console.log(pass, foundUser.password);
    if (!(foundUser && await bcrypt.compare(pass, foundUser.password))) {
      return res.sendStatus(401);
    }
    const user = JSON.parse(JSON.stringify(foundUser.password));
    delete user.hashPass;
    req.session.user = user;
    return res.sendStatus(200);
  } catch (err) {
    console.log(err, '<=======================');
    return res.sendStatus(501);
  }
});

apiUserRouter.post('/signup', async (req, res) => {
  try {
    const { password, email, name } = req.body;
    console.log(password, email, name);
    const hashPass = await bcrypt.hash(password, 10);
    console.log(hashPass);
    const [user, create] = await User.findOrCreate({
      where: { email },
      defaults: {
        password: hashPass,
        name,
      },
    });

    console.log(1);
    req.session.user = user;
    console.log(req.session.user);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

export default apiUserRouter;
