const { response, request } = require("express");

const Data = require("../models/data.model");

const dataGet = async (req, res) => {
  try {
    const datas = await Data.find();

    res.json({
      datas,
    });
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

module.exports = {
  dataGet,
};
