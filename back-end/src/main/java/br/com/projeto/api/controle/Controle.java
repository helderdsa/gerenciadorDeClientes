package br.com.projeto.api.controle;


import org.springframework.data.domain.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "*")
public class Controle {

  @Autowired
  private Repositorio repo;

  @PostMapping("/")
  public Cliente cadastrar(@RequestBody Cliente c) {
    return repo.save(c);
  }

  @GetMapping("/")
  public Iterable<Cliente> listar() {
    return repo.findAll();
  }

  @GetMapping("/{codigo}")
  public Cliente buscar(@PathVariable long codigo) {
    return repo.findById(codigo).get();
  }

  @GetMapping("/ordenado")
  public Iterable<Cliente> listarOrdenado(@RequestParam String coluna, @RequestParam String direcao) {
    Sort sort = Sort.by(Sort.Direction.fromString(direcao), coluna);
    return repo.findAll(sort);
  }

  @PutMapping("/")
  public Cliente editar(@RequestBody Cliente c) {
    return repo.save(c);
  }

  @DeleteMapping("/{codigo}")
  public void remover(@PathVariable long codigo) {
    repo.deleteById(codigo);
  }
}
