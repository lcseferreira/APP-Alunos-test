import { Endereco } from './endereco';
export class Responsavel {
  id!: number;
  nome!: string;
  cpf!: string;
  rg!: string;
  contato1!: string;
  contato2!: string;
  endereco!: Endereco;

  constructor() {}
}
