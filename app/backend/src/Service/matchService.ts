import IMatchResultBody from '../Interfaces/Match/updateMatchResult';
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

const updateMatchService = async (id: number, body: IMatchResultBody)
: Promise<{ type: number | null, message: string } > => {
  const { homeTeamGoals, awayTeamGoals } = body;
  const [response] = await Match.update({ homeTeamGoals, awayTeamGoals }, {
    where: { id },
  });
  if (!response) return { type: 404, message: 'There is no team with such id!' };
  return { type: null, message: 'Match updated!' };
};

export {
  getAllService,
  getFilteredService,
  createMatchService,
  endMatchByIdService,
  updateMatchService,
};
