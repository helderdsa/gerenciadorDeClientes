import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manipular-cliente',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './manipular-cliente.component.html',
  styleUrl: './manipular-cliente.component.css',
})
export class ManipularClienteComponent {
  cliente = new Cliente();
  clientes: Cliente[] = [];
  buscaId: String = '';
  colunaFiltro = '';
  ordenacaoFiltro = '';

  constructor(
    private servico: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  alterar(): void {
    this.servico.putCliente(this.cliente).subscribe(() => {
      alert('Cliente alterado com sucesso!');
      this.navegar('/');
    });
  }

  deletar(): void {
    this.servico.deleteCliente(this.cliente.codigo).subscribe(() => {
      alert('Cliente deletado com sucesso!');
      this.navegar('/');
    });
  }

  cancelar(): void {
    this.cliente = new Cliente();
    this.navegar('/');
  }

  navegar(rota: String): void {
    this.router.navigate([rota]);
  }

  ngOnInit(): void {
    const codigoCliente = this.activatedRoute.snapshot.paramMap.get('codigo');
    console.log(codigoCliente);
    this.servico
      .getCliente(codigoCliente)
      .subscribe((data) => (this.cliente = data));
  }
}
