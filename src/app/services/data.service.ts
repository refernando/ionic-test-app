import { Injectable } from '@angular/core';

export interface Animal {
  AnimalId: number;
  AnimalNome: string;
  AnimalNascimento: string;
  Sexo: string;
  Pelagem: string;
  Categoria: string;
  CategoriaPlural: string;
  CategoriaDescricao: string;
  Raca: string;
  AnimalPaiID: number;
  AnimalPaiNome: string;
  AnimalMaeID: number;
  AnimalMaeNome: string;
  DataEntrada: string;
  Idade: number;
  AnimalFotoCapa: string;
  Registro: string;
  AnimalRegistro: string;
  AnimalVenda: number;
  AnimalVendaExibir: number;
  AnimalVendaObs: string;
  AnimalPreco: number;
  AnimalPrecoExibir: number;
  AnimalParcelas: number;
  AnimalDescricao: string;
  HarasCriador: string;
  HarasProprietario: string;
  AnimalCompeticoesDescricao: string;
  AnimalGaleriaDescricao: string;
  AnimalGenealogiaExibirWs: number;
  AnimalGenealogiaDescricao: string;
  Status: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getAnimals() {
    return fetch(
      'https://entrar.equinogestor.com.br/App_Services/Api/Animais.aspx',
      // 'http://localhost:3030/api/v1/animals',
      {
        headers: {
          Authorization:
            'cf844b4d75d87b26b01e7a3697975fc7112d624f0ad8230a6b583748f67cceae',
        },
      }
    );
  }

  public getAnimalById(id: number) {
    return fetch(
      'https://entrar.equinogestor.com.br/App_Services/Api/Animal.aspx?id=' + id,
      // 'http://localhost:3030/api/v1/animals/' + id,
      {
        headers: {
          Authorization:
            'cf844b4d75d87b26b01e7a3697975fc7112d624f0ad8230a6b583748f67cceae',
        },
      }
    );
  }
}
