package br.com.ramon.AppProdutos.service;

import br.com.ramon.AppProdutos.model.Produto;

import java.util.List;
import java.util.Optional;

public interface ProdutoService {
    Produto save(Produto produto);
    Optional<Produto> getById(Long id);
    List<Produto> getAll();
    Produto update(Produto produto);
    void delete(Long id);

}
