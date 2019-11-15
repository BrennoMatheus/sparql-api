import SparqlClient from "sparql-client";

const endpoint = "http://localhost:3030/despesas/sparql";

export default new SparqlClient(endpoint);
