package br.com.projeto.api.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projeto.api.modelo.Cliente;

public interface Repositorio extends JpaRepository<Cliente, Long>{
  
}
