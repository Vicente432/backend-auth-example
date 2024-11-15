const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const { checkAuth, checkAdmin } = require("../middleware/auth");

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/:id", checkAuth, checkAdmin, getOneUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
