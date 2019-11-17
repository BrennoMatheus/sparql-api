import sparqlClient from "../config/sparql-client";

const expenseController = {
  async getTotalExpenses(req, res) {
    const query = `SELECT * WHERE {
    		?subject ?predicate '${req.params.area}'.
    		?subject <http://vocab.e.gov.br/2013/09/loa#valorTotalPago> ?object
    	}`;
    sparqlClient.query(query).execute((error, response) => {
      if (response.results.bindings.length > 0) {
        const values = response.results.bindings.map(element =>
          Number(element.object.value)
        );
        const total = values.reduce(
          (acumulator, valorAtual) => acumulator + valorAtual
        );
        return res.json({ total: total.toFixed(2) });
      } else {
        return res.json({
          error: "search returned no results"
        });
      }
    });
  }
};

export default expenseController;
