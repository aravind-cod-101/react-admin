module.exports = (req, res, next) => {
  res.header("Content-Range", "posts 0-20/20");
  res.header("Content-Range", "gallery 0-20/20");
  next();
};
