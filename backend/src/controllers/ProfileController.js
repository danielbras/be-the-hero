const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    // Lista todos os campos da tabela incidentes, 
    // onde o id da requisição é igual ao id do banco
    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');
    
    return response.json(incidents);
  }
}