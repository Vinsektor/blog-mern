// Данный код отвечает за проверку JWT токена и предоставление доступа
/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, 'secret123');

      req.userId = decoded._id;
      return next();
    } catch (error) {
      return res.status(403).json({
        message: 'Нет доступа',
      });
    }
  } else {
    return res.status(403).json({
      message: 'Нет доступа',
    });
  }
};
