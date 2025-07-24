package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manifestacoes")
public class ManifestacaoIntencaoController {

    @GetMapping
    public void listarManifestacoes() {}

    @GetMapping("/{id}")
    public void buscarManifestacaoPorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarManifestacao() {}

    @PutMapping("/{id}")
    public void atualizarManifestacao(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarManifestacao(@PathVariable Integer id) {}
}
