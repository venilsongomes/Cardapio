package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/status")
public class StatusController {

    @GetMapping
    public void listarTodosStatus() {}

    @GetMapping("/{id}")
    public void buscarStatusPorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarStatus() {}

    @PutMapping("/{id}")
    public void atualizarStatus(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarStatus(@PathVariable Integer id) {}
}
