const router = require("express").Router();

const siswaController = require("../controllers/SiswaController");

/* GET home page. */
router.get("/", siswaController.viewStudent);
router.get("/create", siswaController.createStudent);
router.post("/create", siswaController.storeStudent);
router.delete("/remove/:id", siswaController.removeSatudent);

module.exports = router;
