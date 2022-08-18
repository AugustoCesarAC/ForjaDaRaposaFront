import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionsService {

  constructor() { }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/UB7iHgs.png';
  }

}
