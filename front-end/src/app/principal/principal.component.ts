import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  cliente = new Cliente();
  clientes: Cliente[] = [];
  buscaId: String = '';
  colunaFiltro = '';
  ordenacaoFiltro = '';

  constructor(private servico: ClienteService, private router: Router) {}

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

  selecionar(index: number): void {
    this.cliente = this.clientes[index];
  }

  navegar(rota: String): void {
    this.router.navigate([rota]);
  }

  ngOnInit() {
    this.listar();
  }
}