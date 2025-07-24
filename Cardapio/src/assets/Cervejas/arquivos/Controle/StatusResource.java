package Ufg.DFS.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/status")
public class StatusResource {

    @RequestMapping(method = RequestMethod.GET)
    public String listar() {
        return "Status/listar";
    }

    @RequestMapping(method = RequestMethod.POST)
    public String cadastrar() {
        return "Status/cadastrar";
    }
}