import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from  'rxjs/operators'

import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) {

   }

   usuarioJaExiste(){
     return (controll : AbstractControl) => {
       return controll.valueChanges.pipe(
         switchMap( (nomeUsuario) => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)),
          map((usuarioExiste) => (usuarioExiste ? {usuarioExistente:true} : null)),
          first()
       )
       }
   }
}
