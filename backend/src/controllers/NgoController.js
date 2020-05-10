const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);
  },
  
  async create(req, res) {
    const { name, email, whatsapp, city, uf, country} = req.body;

    const id = generateUniqueId();

    await connection('ngos').insert({
      id, 
      name,
      email,
      whatsapp,
      city,
      uf,
      country,
    });

    return res.json({id});
  }
};