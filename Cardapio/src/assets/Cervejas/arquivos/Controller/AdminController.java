package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admins")
public class AdminController {

    @GetMapping
    public void listarTodosAdmins() {}

    @GetMapping("/{id}")
    public void buscarAdminPorId(@PathVariable Integer id) {}

    @PostMapping
    public void criarAdmin() {}

    @PutMapping("/{id}")
    public void atualizarAdmin(@PathVariable Integer id) {}

    @DeleteMapping("/{id}")
    public void deletarAdmin(@PathVariable Integer id) {}
}
