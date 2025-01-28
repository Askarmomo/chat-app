import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {

  const token = req.cookies.token;

  if (!token) return res.status(400).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authenticate;
