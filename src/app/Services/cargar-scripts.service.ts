import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  cargaCodeStyle(){
      let script =document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert";
      let body = document.getElementsByTagName("body")[0];
      body.append(script);
    }
}
