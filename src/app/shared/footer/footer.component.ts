import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../assets/Data/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number= new Date(). getFullYear(); /* Para colocar la Fecha automáticamente */
  constructor( public _info:InfoPaginaService) { }

  ngOnInit() {
  }

}
