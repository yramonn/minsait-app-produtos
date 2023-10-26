package br.com.ramon.AppProdutos.service;

import br.com.ramon.AppProdutos.model.Produto;
import br.com.ramon.AppProdutos.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    private ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoServiceImpl(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @Override
    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public Optional<Produto> getById(Long id) {
        return produtoRepository.findById(id);
    }

    @Override
    public List<Produto> getAll() {
        return produtoRepository.findAll();
    }

    @Override
    public Produto update(Produto produto) {
        //encontrei o produto
        Optional<Produto> upProduto = produtoRepository.findById(produto.getId());

        //se ele existir, atualizar:
        if(upProduto.isPresent()) {
            Produto newProduto = upProduto.get();
            newProduto.setCodigoBarras(produto.getCodigoBarras());
            newProduto.setNome(produto.getNome());
            newProduto.setPreco(produto.getPreco());
            return produtoRepository.save(newProduto);
        }
        return produto;
    }

    @Override
    public void delete(Long id) {
        produtoRepository.deleteById(id);
    }

}
