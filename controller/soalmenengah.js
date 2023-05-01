import SoalMenengah from "../model/modelSoalMenengah.js";

export const getSoalMenengah = async (req, res) => {
  try {
    const response = await SoalMenengah.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSoalMenengahById = async (req, res) => {
  try {
    const response = await SoalMenengah.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSoalMenengah = async (req, res) => {
  try {
    await SoalMenengah.create(req.body);
    res.status(201).json({ msg: "Product created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSoalMenengah = async (req, res) => {
  try {
    await SoalMenengah.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSoalMenengah = async (req, res) => {
  try {
    await SoalMenengah.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product updated" });
  } catch {
    console.log(error.message);
  }
};