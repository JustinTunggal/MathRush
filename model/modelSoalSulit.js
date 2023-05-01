import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const SoalSulit = db.define(
  "soalsulit",
  {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    teks_sulit: DataTypes.STRING,
    pilihanbenar_sulit: DataTypes.STRING,
    pilihan1_sulit: DataTypes.STRING,
    pilihan2_sulit: DataTypes.STRING,

  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default SoalSulit;

(async () => {
  await db.sync();
})();