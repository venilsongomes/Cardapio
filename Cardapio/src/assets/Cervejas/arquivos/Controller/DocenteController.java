package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/docentes")
public class DocenteController {

    @GetMapping
    public void listarTodosDocentes() {}

    @GetMapping("/{id}")
    public void buscarDocentePorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarDocente() {}

    @PutMapping("/{id}")
    public void atualizarDocente(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarDocente(@PathVariable Integer id) {}
}
