import Team from '../database/models/TeamModel';

const getAllService = async ()
: Promise<{ type: number | null, message: { id: number, teamName: string }[] }> => {
  const message = await Team.findAll();
  return { type: null, message };
};

export default getAllService;
