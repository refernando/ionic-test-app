const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3030;

// Habilita o CORS para todas as origens e métodos
app.use(cors({ origin: "*", methods: "*" }));

// Middleware para parsing de JSON no corpo da requisição
app.use(express.json());

// Define o Router para as rotas da API
const apiRouter = express.Router();

const animals = [
  {
    AnimalId: 5901,
    AnimalNome: "Duque do Equinogestor",
    AnimalNascimento: "2010-06-07 00:00:00",
    Sexo: "1",
    Pelagem: "Tordilha",
    Categoria: "Garanhão",
    CategoriaPlural: "Garanhões",
    CategoriaDescricao: "",
    Raca: "Mangalarga Marchador",
    AnimalPaiID: 381112224462,
    AnimalPaiNome: "Santana do Equinogestor",
    AnimalMaeID: 686,
    AnimalMaeNome: "Berila do Equinogestor",
    DataEntrada: "",
    Idade: 174,
    AnimalFotoCapa:
      "/App_Files/Application/00000000000/Animais/Galeria/gdhtczdf.png",
    Registro: "",
    AnimalRegistro: "",
    AnimalVenda: 1,
    AnimalVendaExibir: 1,
    AnimalVendaObs: "Sêmen disponível para coleta",
    AnimalPreco: 2000.0,
    AnimalPrecoExibir: 1,
    AnimalParcelas: 10,
    AnimalDescricao:
      "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n",
    HarasCriador: "",
    HarasProprietario: "",
    AnimalCompeticoesDescricao: "",
    AnimalGaleriaDescricao: "",
    AnimalGenealogiaExibirWs: 0,
    AnimalGenealogiaDescricao: "",
    Status: 1,
  },
  {
    AnimalId: 100,
    AnimalNome: "CAVALO 2",
    AnimalNascimento: "2010-06-07 00:00:00",
    Sexo: "1",
    Pelagem: "Tordilha",
    Categoria: "Garanhão",
    CategoriaPlural: "Garanhões",
    CategoriaDescricao: "",
    Raca: "Mangalarga Marchador",
    AnimalPaiID: 381112224462,
    AnimalPaiNome: "Santana do Equinogestor",
    AnimalMaeID: 686,
    AnimalMaeNome: "Berila do Equinogestor",
    DataEntrada: "",
    Idade: 174,
    AnimalFotoCapa:
      "/App_Files/Application/00000000000/Animais/Galeria/gdhtczdf.png",
    Registro: "",
    AnimalRegistro: "",
    AnimalVenda: 1,
    AnimalVendaExibir: 1,
    AnimalVendaObs: "Sêmen disponível para coleta",
    AnimalPreco: 2000.0,
    AnimalPrecoExibir: 1,
    AnimalParcelas: 10,
    AnimalDescricao:
      "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n",
    HarasCriador: "",
    HarasProprietario: "",
    AnimalCompeticoesDescricao: "",
    AnimalGaleriaDescricao: "",
    AnimalGenealogiaExibirWs: 0,
    AnimalGenealogiaDescricao: "",
    Status: 1,
  },
  {
    AnimalId: 200,
    AnimalNome: "CAVALO 3",
    AnimalNascimento: "2010-06-07 00:00:00",
    Sexo: "1",
    Pelagem: "Tordilha",
    Categoria: "Garanhão",
    CategoriaPlural: "Garanhões",
    CategoriaDescricao: "",
    Raca: "Mangalarga Marchador",
    AnimalPaiID: 381112224462,
    AnimalPaiNome: "Santana do Equinogestor",
    AnimalMaeID: 686,
    AnimalMaeNome: "Berila do Equinogestor",
    DataEntrada: "",
    Idade: 174,
    AnimalFotoCapa:
      "/App_Files/Application/00000000000/Animais/Galeria/gdhtczdf.png",
    Registro: "",
    AnimalRegistro: "",
    AnimalVenda: 1,
    AnimalVendaExibir: 1,
    AnimalVendaObs: "Sêmen disponível para coleta",
    AnimalPreco: 2000.0,
    AnimalPrecoExibir: 1,
    AnimalParcelas: 10,
    AnimalDescricao:
      "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n",
    HarasCriador: "",
    HarasProprietario: "",
    AnimalCompeticoesDescricao: "",
    AnimalGaleriaDescricao: "",
    AnimalGenealogiaExibirWs: 0,
    AnimalGenealogiaDescricao: "",
    Status: 1,
  },
];

apiRouter.get("/animals", (req, res) => {
  res.json(animals);
});

apiRouter.get("/animals/:id", (req, res) => {
  res.json(animals.find((a) => a.AnimalId == req.params.id));
});

// Aplica o prefixo /api/v1 a todas as rotas do apiRouter
app.use("/api/v1", apiRouter);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Fake API Server running on http://localhost:${PORT}/api/v1`);
});
