import Team from '../database/models/TeamModel';

const getAllService = async ()
: Promise<{ type: number | null, message: { id: number, teamName: string }[] }> => {
  const message = await Team.findAll();
  return { type: null, message };
};

const getByIdService = async (id: number)
: Promise<{ type: number | null, message: { id: number, teamName: string } | null | string }> => {
  const message = await Team.findByPk(id);
  if (!message) return { type: 404, message: 'There is no team with such id!' };
  return { type: null, message };
};

export { getAllService, getByIdService };
