const errorHandler = ((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status || 500).send({ errors: [err.message || 'Internal Server Error'] });
  });

  module.exports = errorHandler;