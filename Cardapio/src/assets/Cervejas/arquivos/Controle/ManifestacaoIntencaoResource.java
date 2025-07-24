package Ufg.DFS.Controle;
import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import Ufg.DFS.Model.ManifestacaoIntencao;
import Ufg.DFS.Service.ManifestacaoIntencaoService;


@RestController
@RequestMapping(value = "/manifestacao")
public class ManifestacaoIntencaoResource {
    private ManifestacaoIntencaoService  manifestacaoIntencaoService;


    public ManifestacaoIntencaoResource(ManifestacaoIntencaoService manifestacaoIntencaoService){
        this.manifestacaoIntencaoService = manifestacaoIntencaoService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String listar() {
        return "ManifestacaoIntencao/listar";
    }



    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<ManifestacaoIntencao>createManifestacaoIntencao(@RequestBody ManifestacaoIntecaoDto ManifestacaoIntecaoDto) {
         
        var manifestacao = manifestacaoIntencaoService.createManifestacaoIntencao(ManifestacaoIntecaoDto);

        return ResponseEntity.created( URI.create("/manifestacao/" + manifestacao.toString(0))).build();
    }

}
