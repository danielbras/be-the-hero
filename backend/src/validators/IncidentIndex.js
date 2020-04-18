const { celebrate, Joi, Segments } = require("celebrate");

module.exports = () => {
  return celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  });
};
