package br.com.ramon.AppProdutos.service;

import br.com.ramon.AppProdutos.model.Estoque;

import java.util.List;
import java.util.Optional;

public interface EstoqueService {
    Estoque save(Estoque estoque);

    Optional<Estoque> getById(Long id);

    List<Estoque> getAll();

    Estoque update(Estoque estoque);

    void delete(Long id);

    Estoque addQuantidade(Long id, int quantidade);

    Estoque delQuantidade(Long id, int quantidade);
}
