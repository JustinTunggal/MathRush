import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const SoalMenengah = db.define(
  "soalmenengah",
  {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    teks_menengah: DataTypes.STRING,
    pilihanbenar_menengah: DataTypes.STRING,
    pilihan1_menengah: DataTypes.STRING,
    pilihan2_menengah: DataTypes.STRING,

  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default SoalMenengah;

(async () => {
  await db.sync();
})();