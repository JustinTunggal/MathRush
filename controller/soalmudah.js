import SoalMudah from "../model/modelSoalMudah.js";

export const getSoalMudah = async (req, res) => {
  try {
    const response = await SoalMudah.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSoalMudahById = async (req, res) => {
  try {
    const response = await SoalMudah.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSoalMudah = async (req, res) => {
  try {
    await SoalMudah.create(req.body);
    res.status(201).json({ msg: "Product created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSoalMudah = async (req, res) => {
  try {
    await SoalMudah.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSoalMudah = async (req, res) => {
  try {
    await SoalMudah.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product updated" });
  } catch {
    console.log(error.message);
  }
};