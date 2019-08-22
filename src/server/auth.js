const jwtUtils = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    res.sendStatus(403);
    return;
  }

  const authHeader = req.headers.authorization;

  if (!/^Bearer (.+)$/.test(authHeader)) {
    res.sendStatus(403);
    return;
  }

  const match = /^Bearer (.+)$/.exec(authHeader);

  if (!match || !match[1]) {
    res.sendStatus(403);
    return;
  }

  const jwt = match[1];

  try {
    jwtUtils.verify(jwt, process.env.JWTSECRET);
  } catch (e) {
    res.sendStatus(403);
    return;
  }

  next();
};

module.exports = authMiddleware;
