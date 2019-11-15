import sparqlClient from "./../config/sparql-client";

class DespesaController {
  async index(req, res) {
    const util = require("util");

    const query = `SELECT * WHERE {
				?subject ?predicate 'SAÚDE'. 
				?subject <http://vocab.e.gov.br/2013/09/loa#valorTotalPago> ?object
			}
			LIMIT 25`;

    sparqlClient.query(query).execute((error, results) => {
      results.results.bindings.forEach(element => console.log(element));
    });

    return res.json("ok");
  }
}

export default new DespesaController();
