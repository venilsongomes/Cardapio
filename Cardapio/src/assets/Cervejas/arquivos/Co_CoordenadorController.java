package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/coordenadores")
public class Co_CoordnadorController {

    @GetMapping
    public void listarTodosCoordenadores() {}

    @GetMapping("/{id}")
    public void buscarCoordenadorPorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarCoordenador() {}

    @PutMapping("/{id}")
    public void atualizarCoordenador(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarCoordenador(@PathVariable Integer id) {}
}
