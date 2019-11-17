import { SparqlClient, SPARQL } from "sparql-client-2";

const endpoint = "http://localhost:3030/despesas/sparql";

export default new SparqlClient(endpoint);
