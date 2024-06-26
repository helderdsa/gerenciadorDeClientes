import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  getCliente(id: String | null): Observable<Cliente> {
    return this.http.get<Cliente>(this.url + '/' + id);
  }

  getFilter(coluna: String, direcao: String): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(
      this.url + '/ordenado?coluna=' + coluna + '&direcao=' + direcao
    );
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
