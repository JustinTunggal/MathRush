import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Highscore = db.define(
  "highscore",
  {
    name: DataTypes.STRING,
    score : DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Highscore;

(async () => {
  await db.sync();
})();
