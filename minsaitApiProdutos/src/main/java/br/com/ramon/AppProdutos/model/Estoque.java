package br.com.ramon.AppProdutos.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table
public class Estoque {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private Produto produto;

	@Column(nullable = false)
	private Integer quantidade;

	//construtores:
	public Estoque() {}

	public Estoque(Long id, Produto produto, Integer quantidade) {
		this.id = id;
		this.produto = produto;
		this.quantidade = quantidade;
	}

	public void adicionarEstoque(int quantidade) {
		this.quantidade += quantidade; //this.quantidade = this.quantidade + quantidade;
	}

	public void removerEstoque(int quantidade) {
		this.quantidade -= quantidade; //this.quantidade = this.quantidade - quantidade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Estoque other = (Estoque) obj;
		return Objects.equals(id, other.id);
	}



}
