const Siswa = require("../models/Siswa");

module.exports = {
  viewStudent: async (req, res) => {
    const siswa = await Siswa.find();
    res.render("layouts/siswa/index", { siswa });
  },
  createStudent: (req, res) => {
    res.render("layouts/siswa/create");
  },
  storeStudent: async (req, res) => {
    const { name, clas, age } = req.body;
    await Siswa.create({ name, clas, age });
    res.redirect("/");
  },
  removeSatudent: async (req, res) => {
    const { id } = req.params;
    const thisSiswa = await Siswa.findOne({ _id: id });
    await thisSiswa.remove();
    res.redirect("/");
  },
};
