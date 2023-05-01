import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const SoalMudah = db.define(
  "soalmudah",
  {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    teks_mudah: DataTypes.STRING,
    pilihanbenar_mudah: DataTypes.STRING,
    pilihan1_mudah: DataTypes.STRING,
    pilihan2_mudah: DataTypes.STRING,

  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default SoalMudah;

(async () => {
  await db.sync();
})();