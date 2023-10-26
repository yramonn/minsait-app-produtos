package br.com.ramon.AppProdutos.repository;

import br.com.ramon.AppProdutos.model.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstoqueRepository extends JpaRepository<Estoque, Long> {
}
