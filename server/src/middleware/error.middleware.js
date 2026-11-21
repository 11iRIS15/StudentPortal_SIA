function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.status || 500;

  res.status(status).json({
    type: "about:blank",
    title: err.title || "Internal Server Error",
    status,
    detail: err.message || "An unexpected error occurred.",
    instance: req.originalUrl,
  });
}

module.exports = errorHandler;