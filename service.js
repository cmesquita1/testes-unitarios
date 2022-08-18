const { get } = require("axios");

const URl = "https://swapi.dev/api/people";

function obterPessoas(nome) {
  return get(`${URl}/?search=${nome}&format=json`).then((res) =>
    res.data.results.map(mapearPessoas)
  );
}

function mapearPessoas(item) {
  return { nome: item.name, peso: item.height };
}

module.exports = { obterPessoas };
