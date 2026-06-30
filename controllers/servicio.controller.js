const Servicio = require('../models/servicio.model');
// Estas ya son las funciones que mas adelante utilizaremos como ENDPOINTS
exports.consultar = async (req, res) => {
  const data = await Servicio.find();
  res.render('pages/services.ejs', { servicios: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Servicio.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  console.log(req.body)
    let resultado= await Servicio.insertOne(req.body);
  res.json(resultado);
};

exports.actualizar = async (req, res) => {
  const data = await Servicio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Servicio.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Servicio eliminado" });
};

exports.formulario = async(req,res) => {
  res.render('pages/registrarservicio')
}