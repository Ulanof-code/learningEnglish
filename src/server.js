import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import storage from 'session-file-store';
import renderUserRouter from './routes/renderUserRouter';
import jsxRender from './utils/jsxRender';
import apiUserRouter from './routes/apiUserRouter';
import apiCardRouter from './routes/apiCardRouter';
import apiThemRouter from './routes/apiThemRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = storage(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  // добавить сюда данные из сессии в res.locals
  res.locals.user = req.session.user;
  next();
});

// app.use('/', apiUserRouter);
// app.use('/api/', apiUserRouter);
// app.use('/api/thems', apiThemRouter);
// app.use('/api/card', apiCardRouter);
// app.use('/signup', renderUserRouter);

app.use('/', renderUserRouter);
app.use('/api/', apiUserRouter);
app.use('/thems', renderUserRouter);
app.use('/api/card', apiCardRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
