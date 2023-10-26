package br.com.ramon.AppProdutos.repository;

import br.com.ramon.AppProdutos.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
