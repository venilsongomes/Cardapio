package Ufg.DFS.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Ufg.DFS.Controle.ManifestacaoIntecaoDto;
import Ufg.DFS.Model.ManifestacaoIntencao;
import Ufg.DFS.Repository.UserRepository;

@Service
public class ManifestacaoIntencaoService {

    private UserRepository manifestacaoIntencaoRepository;

    @Autowired
     public ManifestacaoIntencaoService(UserRepository manifestacaoIntencaoRepository){
        this.manifestacaoIntencaoRepository = manifestacaoIntencaoRepository;
     }

     public Integer createManifestacaoIntencao(ManifestacaoIntecaoDto dto){

        // DTO -> ENTITY

        ManifestacaoIntencao entity = new ManifestacaoIntencao();
        entity.setDocente(dto.docente());
        entity.setNucleoConhecimento(dto.nucleoConhecimento());
        ManifestacaoIntencao salvo = manifestacaoIntencaoRepository.save(entity);
        return salvo.getId();

     }

      
    
}
