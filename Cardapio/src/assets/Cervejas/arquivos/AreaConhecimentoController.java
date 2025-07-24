package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/areas")
public class AreaConhecimentoController {

    @GetMapping
    public void listarTodasAreas() {}

    @GetMapping("/{id}")
    public void buscarAreaPorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarArea() {}

    @PutMapping("/{id}")
    public void atualizarArea(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarArea(@PathVariable Integer id) {}
}
