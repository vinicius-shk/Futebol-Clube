import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './TeamModel';

class Match extends Model {
  declare id: number;
  declare teamName: string;
}

Match.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Team.belongsTo(Match, { foreignKey: 'id', as: 'homeTeam' });
Team.belongsTo(Match, { foreignKey: 'id', as: 'awayTeam' });

Match.hasMany(Team, { foreignKey: 'id', as: 'homeTeam' });
Match.hasMany(Team, { foreignKey: 'id', as: 'awayTeam' });

export default Match;
