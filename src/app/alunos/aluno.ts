import { Relatorio } from './relatorio';
import { Escola } from './escola';
import { Endereco } from './endereco';
import { Responsavel } from './responsavel';
export class Aluno {
  id!: number;
  nome!: string;
  cpf!: string;
  ra!: string;
  dataNascimento!: string;
  sexo!: string;
  deficiencia!: string;
  necessitaCuidador!: string;
  dataCadastro!: string;

  responsavel!: Responsavel;
  endereco!: Endereco;
  escola!: Escola;
  relatorio!: Relatorio;

  constructor() {}
}
