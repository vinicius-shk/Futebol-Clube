import * as Joi from 'joi';

const createMatchSchema = Joi.object({
  homeTeam: Joi.number().required(),
  awayTeam: Joi.number().disallow(Joi.ref('homeTeam')).required(),
  homeTeamGoals: Joi.number().required(),
  awayTeamGoals: Joi.number().required(),
});

export default createMatchSchema;
