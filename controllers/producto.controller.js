const Producto = require('../models/producto.model');

exports.consultar = async (req, res) => {
  const data = await Producto.find();
  res.render('pages/productos.ejs', { productos: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Producto.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  console.log(req.body)
    let resultado= await Producto.insertOne(req.body);
  res.json(resultado);
};

exports.actualizar = async (req, res) => {
  const data = await Producto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Producto eliminado" });
};

exports.formulario = async(req,res) => {
  res.render('pages/registrarproducto')
}