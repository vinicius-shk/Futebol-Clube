import ICreateMatchBody from '../Interfaces/Match/createMatch';
import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

const getAllService = async ()
: Promise<{ type: number | null, message: Match[] }> => {
  const message = await Match.findAll({
    include: [{
      model: Team, as: 'teamHome',
    },
    {
      model: Team, as: 'teamAway',
    }],
  });
  return { type: null, message };
};

const getFilteredService = async (query: boolean)
: Promise<{ type: number | null, message: Match[] }> => {
  const message = await Match.findAll({
    where: { inProgress: query },
    include: [{
      model: Team, as: 'teamHome',
    },
    {
      model: Team, as: 'teamAway',
    }],
  });
  return { type: null, message };
};

const createMatchService = async (body: ICreateMatchBody)
: Promise<{ type: number | null, message: ICreateMatchBody }> => {
  const { id } = await Match.create({ ...body, inProgress: true });
  return { type: null, message: { id, ...body, inProgress: true } };
};

const endMatchByIdService = async (id: number)
: Promise<{ type: number | null, message: string }> => {
  await Match.update({ inProgress: false }, {
    where: { id },
  });
  return { type: null, message: 'Finished' };
};

export { getAllService, getFilteredService, createMatchService, endMatchByIdService };
