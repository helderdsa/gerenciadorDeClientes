import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  cliente = new Cliente();
  clientes: Cliente[] = [];
  buscaId: String = '';
  colunaFiltro = '';
  ordenacaoFiltro = '';

  constructor(private servico: ClienteService, private router: Router) {}

  cadastrar(): void {
    this.servico.postCliente(this.cliente).subscribe(() => {
      alert('Cliente cadastrado com sucesso!');
      this.navegar('/');
    });
  }

  navegar(rota: String): void {
    this.router.navigate([rota]);
  }

  cancelar(): void {
    this.cliente = new Cliente();
    this.navegar('/');
  }

}
