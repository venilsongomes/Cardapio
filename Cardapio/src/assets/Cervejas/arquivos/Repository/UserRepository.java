package Ufg.DFS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Ufg.DFS.Model.ManifestacaoIntencao;

@Repository
public interface UserRepository extends JpaRepository<ManifestacaoIntencao, Integer> {
}
