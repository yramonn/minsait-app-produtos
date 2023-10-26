package br.com.ramon.AppProdutos.controller;

import br.com.ramon.AppProdutos.model.Estoque;
import br.com.ramon.AppProdutos.service.EstoqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/estoque")
public class EstoqueResource {

    private EstoqueService estoqueService;

    @Autowired
    public EstoqueResource(EstoqueService estoqueService) {
        this.estoqueService = estoqueService;
    }

    @GetMapping
    public ResponseEntity<List<Estoque>> getAll(){
        List<Estoque> estoques = estoqueService.getAll();
        if(estoques == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(estoques);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Estoque>> getById(@PathVariable Long id){
        Optional<Estoque> estoque = estoqueService.getById(id);
        if(estoque == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(estoque);
    }

    @PostMapping
    public ResponseEntity<Estoque> save(@RequestBody Estoque estoque){
        return new ResponseEntity<>(estoqueService.save(estoque), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Estoque> update(@RequestBody Estoque estoque){
        return new ResponseEntity<>(estoqueService.update(estoque), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        estoqueService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
