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

export default getAllService;
