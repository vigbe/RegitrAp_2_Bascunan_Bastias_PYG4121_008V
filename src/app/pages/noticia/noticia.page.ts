import { Component,OnInit} from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
/*import { Ghibli } from 'src/app/interfaces/interfaces';*/
import { Feriado } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';





@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  feriado: Feriado[] = [];

  constructor(private noticiaService: NoticiasService,
              private menuController: MenuController){}

  /*ngOnInit() {
    this.GhibliService.getGhibli().subscribe(resp=>{
      console.log('films',resp);
      this.noticia.push(...resp.ghibli)
    });
  }*/

  ngOnInit() {
    this.noticiaService.getFeriado().subscribe(resp=>{
      console.log('feriado',resp);
      this.feriado.push(...resp.data);
      });
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

}
