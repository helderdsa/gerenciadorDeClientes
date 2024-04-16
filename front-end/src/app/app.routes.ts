import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ManipularClienteComponent } from './manipular-cliente/manipular-cliente.component';
export const routes: Routes = [
  {path: '', component: PrincipalComponent, title: "Home"},
  {path: 'cadastro', component: CadastroClienteComponent, title:"Cadastro"},
  {path: 'alterar/:codigo', component: ManipularClienteComponent, title:"Alterar Cliente"}
];
