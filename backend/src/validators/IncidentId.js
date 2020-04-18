const { celebrate, Joi, Segments } = require("celebrate");

module.exports = () => {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  });
};
