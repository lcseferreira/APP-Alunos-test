import { Endereco } from './endereco';
export class Escola {
  id!: number;
  nome!: string;
  serieEscolar!: string;
  periodoEscolar!: string;
  professor!: string;
  professorEspecial!: string;
  cuidador!: string;
  endereco!: Endereco;

  constructor() {}
}
