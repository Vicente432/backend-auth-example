const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ where: req.query });
    res.status(200).json(users);
  } catch (error) {
    res.status(501).send(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(501).send(error);
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(501).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(501).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const findUser = await User.findByPk(req.params.id);
    res.status(200).json(findUser);
  } catch (error) {
    res.status(501).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(`User with id ${req.params.id} was deleted`);
  } catch (error) {
    res.status(501).send(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
