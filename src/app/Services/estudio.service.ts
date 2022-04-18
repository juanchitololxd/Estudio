import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  path ="./../../assets/materias.json";

  constructor(private http: HttpClient) { }

  getTema(materia: string, tema: string){
    let path =`./../../../../assets/${materia}/${tema}.html`
    return this.http.get(path, {responseType: "text"});

    // this.http.get(`/Estudio/getTopics/${materia}`).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
    //return "<html lang=\"en\"> <head> <meta charset=\"UTF-8\" /> <link rel=\"stylesheet\" href=\"./dark.css\" /> </head> <body> <!--h1--> <h1 id=\"#titulo\">titulo</h1> <!--p--> <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p> <!--h2--> <h2>Subtitle</h2> <!--h3--> <h3>short title</h3> <!--cornell--> <div class=\"cornell\"> <p class=\"ask\">¿Que es un animal?</p> <hr class=\"split-cornell\"> <p class=\"rta\">No lo se tu dime</p> </div> <p>Texto <em>italico</em>, <strong>negrita</strong>, <del>tachadas</del> ó <code>reservadas</code> y <!--a--> <a href=\"#codigo\">Enlaces</a> </p> <hr> <!--cita--> <blockquote> Lo que te llevó de cero a cien no de te lelvará de 100 a 1000 <p>Freddy vega</p> </blockquote> <!-- FUTURO: Insertar ecuaciones, por ahora es como xd la verdad--> <pre class=\"prettyprint\"> <code class=\"lang-python\"> while True:\n \tprint(\"hola\") </code> </pre> <table> <tr> <th>colum 1</th> <th>column 2</th> </tr> <tr> <td>r0c0</td> <td>r0c1</td> </tr> <tr> <td>r1c0</td> <td>r1c1</td> </tr> </table> <!--img--> <img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg\" alt=\"python\"> <p>Con mermaid se puede hacer:</p> <!--ul>li*3--> <ul> <li>Diagramas de secuencia</li> <li>Diagramas de Gantt</li> <li>Diagramas de clase</li> <!--li>ol>li--> <li> <ol> <li>Graficos torta</li> </ol> </li> </ul> </body> </html> <script src=\"https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert\" defer=\"\" />"
  }

  getMaterias(){
    return this.http.get(this.path, {responseType: "json"});
  }
  


  
}
