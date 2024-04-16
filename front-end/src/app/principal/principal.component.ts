import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { log } from 'console';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule, JsonPipe],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  cliente = new Cliente();
  clientes: Cliente[] = [];
  buscaId: String = '';
  colunaFiltro = '';
  ordenacaoFiltro = '';
  formVisibilityHandler: boolean = true;

  constructor(private servico: ClienteService) {}

  listar(): void {
    this.servico.getClientes().subscribe((data) => (this.clientes = data));
  }

  buscar(input: String): void {
    if (input !== '') {
      this.servico.getCliente(input).subscribe((data) => {
        this.clientes = [data];
      });
    } else {
      this.listar();
    }
  }

  filtrar(coluna: String, direcao: String): void {
    this.servico
      .getFilter(coluna, direcao)
      .subscribe((data) => (this.clientes = data));
  }

  cadastrar(): void {
    this.servico.postCliente(this.cliente).subscribe(() => {
      this.listar();
      this.cliente = new Cliente();
      alert('Cliente cadastrado com sucesso!');
    });
  }

  selecionar(index: number): void {
    this.cliente = this.clientes[index];
    this.formVisibilityHandler = false;
    console.log(this.cliente);
  }

  alterar(): void {
    this.servico.putCliente(this.cliente).subscribe(() => {
      this.listar();
      this.cliente = new Cliente();
      this.formVisibilityHandler = true;
      alert('Cliente alterado com sucesso!');
    });
  }

  deletar(index: number): void {
    this.servico.deleteCliente(this.cliente.codigo).subscribe(() => {
      this.listar();
      this.cliente = new Cliente();
      this.formVisibilityHandler = true;
      alert('Cliente deletado com sucesso!');
    });
  }

  cancelar(): void {
    this.cliente = new Cliente();
    this.formVisibilityHandler = true;
  }

  ngOnInit() {
    this.listar();
  }
}
