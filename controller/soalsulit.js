import SoalSulit from "../model/modelSoalSulit.js";

export const getSoalSulit = async (req, res) => {
  try {
    const response = await SoalSulit.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSoalSulitById = async (req, res) => {
  try {
    const response = await SoalSulit.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSoalSulit = async (req, res) => {
  try {
    await SoalSulit.create(req.body);
    res.status(201).json({ msg: "Product created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSoalSulit = async (req, res) => {
  try {
    await SoalSulit.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSoalSulit = async (req, res) => {
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