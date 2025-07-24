package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/nucleos")
public class NucleoConhecimentoController {

    @GetMapping
    public void listarTodosNucleos() {}

    @GetMapping("/{id}")
    public void buscarNucleoPorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarNucleo() {}

    @PutMapping("/{id}")
    public void atualizarNucleo(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarNucleo(@PathVariable Integer id) {}
}
