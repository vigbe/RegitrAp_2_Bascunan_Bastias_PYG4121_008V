import { Component,OnInit} from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
/*import { Ghibli } from 'src/app/interfaces/interfaces';*/
import { Feriado } from 'src/app/interfaces/interfaces';





@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  anexo: Feriado[]=[]

  constructor(private noticiaService: NoticiasService){}

  /*ngOnInit() {
    this.GhibliService.getGhibli().subscribe(resp=>{
      console.log('films',resp);
      this.noticia.push(...resp.ghibli)
    });
  }*/

  ngOnInit(){
    this.noticiaService.getCalendario().subscribe(resp=>{
      console.log('noticias',resp);
      
      this.anexo.push(...resp.feriados);
    });
  }

}
