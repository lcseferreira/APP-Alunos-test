import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/alunos.service';
import { Aluno } from '../aluno';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css'],
})
export class alunosListaComponent implements OnInit {
  alunos!: Aluno[];
  alunoSelecionado!: Aluno;
  mensagemSucesso!: string;
  mensagemErro!: string;
  usuario!: string;

  constructor(
    private service: AlunosService,
    private router: Router,
    private usuarioService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioAutenticado();

    this.service
      .listar()
      .subscribe((response: Aluno[]) => (this.alunos = response));
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.alunos = this.alunos.filter((aluno) => {
      return aluno.nome.toLowerCase().includes(value);
    });
  }

  novoCadastro() {
    this.router.navigate(['/alunos/form']);
  }

  preparaDelete(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  deletaraluno() {
    this.service.deletar(this.alunoSelecionado).subscribe(
      (response) => {
        (this.mensagemSucesso = 'Aluno deletado com sucesso!'), this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao deletar o aluno!')
    );
  }
}
