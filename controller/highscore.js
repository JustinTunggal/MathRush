import Highscore from "../model/modelHighscore.js";

export const getHighscore = async (req, res) => {
  try {
    const response = await Highscore.findAll({
      order: [['score', 'DESC']],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


export const createHighscore = async (req, res) => {
  try {
    await Highscore.create(req.body);
    res.status(201).json({ msg: "Product created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteHighscore = async (req, res) => {
  try {
    await Highscore.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateHighscore = async (req, res) => {
  try {
    await Highscore.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product updated" });
  } catch {
    console.log(error.message);
  }
};

export const getLowestHighscore = async (req, res) => {
  try {
    const response = await Highscore.findOne({
      order: [['score', 'ASC']],
      limit: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getHighscoreCount = async (req, res) => {
  try {
    const count = await Highscore.count();
    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
  }
};
