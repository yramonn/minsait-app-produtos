import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produto} from './model/Produto';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  getprodutosById(produtoId: number): Observable<Produto> {
    const apiUrl = `${this.url}/${produtoId}`;
    return this.http.get<Produto>(apiUrl);
  }

  saveprodutos(produto: Produto): Observable<any> {
    return this.http.post<Produto>(this.url, produto, httpOptions);
  }

  updateProdutos(produto: Produto): Observable<any> {
    const apiUrl = `${this.url}/${produto.id}`;
    return this.http.put<Produto>(apiUrl, produto, httpOptions);
  }

  deleteProdutos(produtoId: number): Observable<any> {
    const apiUrl = `${this.url}/${produtoId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
