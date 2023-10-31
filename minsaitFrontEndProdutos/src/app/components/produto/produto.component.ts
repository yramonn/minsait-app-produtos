import {Component, OnInit, TemplateRef} from '@angular/core';
import {Produto} from '../../model/Produto';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ProdutoService} from '../../produto.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  form: any;
  tituloForm: string;
  produtos: Produto[];
  nomeProduto: string;
  // produtoId: number;
  id: number;


  showTabela = true;
  showForm = false;

  modalRef: BsModalRef;

  constructor(private produtoService: ProdutoService,
              private modalService: BsModalService) {}

  ngOnInit(): void {
    this.produtoService.getAllProdutos().subscribe((resultado) => {
      this.produtos = resultado;
    });
  }

  CadastroProdutoForm(): void {
    this.showTabela = false;
    this.showForm = true;
    this.tituloForm = 'Novo Produto';
    this.form = new FormGroup({
      nome: new FormControl(null),
      codigoBarras: new FormControl(null),
      preco: new FormControl(null),
    });
  }

  AtualizarProdutoForm(id): void {
    this.showTabela = false;
    this.showForm = true;

    this.produtoService.getprodutosById(id).subscribe((resultado) => {
      this.tituloForm = `Atualizar ${resultado.nome}`;

      this.form = new FormGroup({
        id: new FormControl(resultado.id),
        nome: new FormControl(resultado.nome),
        codigoBarras: new FormControl(resultado.codigoBarras),
        preco: new FormControl(resultado.preco),
      });
    });
  }

  EnviarProdutoForm(): void {
    const produto: Produto = this.form.value;

    if (produto.id > 0) {
      this.produtoService.updateProdutos(produto).subscribe((resultado) => {
        this.showForm = false;
        this.showTabela = true;
        alert('Produto atualizado com sucesso');
        this.produtoService.getAllProdutos().subscribe((registros) => {
          this.produtos = registros;
        });
      });
    } else {
      this.produtoService.saveprodutos(produto).subscribe((resultado) => {
        this.showForm = false;
        this.showTabela = true;
        alert('Produto inserido com sucesso');
        this.produtoService.getAllProdutos().subscribe((registros) => {
          this.produtos = registros;
        });
      });
    }
  }

  Voltar(): void {
    this.showTabela = true;
    this.showForm = false;
  }

  ConfirmarDeletarProduto(id, nomeProduto, conteudoModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(conteudoModal);
    this.id = id;
    this.nomeProduto = nomeProduto;
  }

  // tslint:disable-next-line:typedef
  DeletarProduto(id){
    this.produtoService.deleteProdutos(id).subscribe(resultado => {
      this.modalRef.hide();
      alert('Produto excluída com sucesso');
      this.produtoService.getAllProdutos().subscribe(registros => {
        this.produtos = registros;
      });
    });
  }

}
