function notFoundHandler(req, res, next) {
  res.status(404).json({
    type: "about:blank",
    title: "Not Found",
    status: 404,
    detail: `Route ${req.originalUrl} does not exist.`,
    instance: req.originalUrl,
  });
}

module.exports = notFoundHandler;