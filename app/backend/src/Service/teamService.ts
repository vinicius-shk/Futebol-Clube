import Team from '../database/models/TeamModel';

const getAllService = async ()
: Promise<{ type: number | null, message: { id: number, teamName: string }[] }> => {
  const message = await Team.findAll();
  return { type: null, message };
};

const getByIdService = async (id: number)
: Promise<{ type: number | null, message: { id: number, teamName: string } | null }> => {
  const message = await Team.findByPk(id);
  return { type: null, message };
};

export { getAllService, getByIdService };
