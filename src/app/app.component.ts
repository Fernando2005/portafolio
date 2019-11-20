import { Component } from '@angular/core';
import { InfoPaginaService } from '../assets/Data/services/info-pagina.service';
import { ProductosService } from '../assets/Data/services/services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public InfopaginaService: InfoPaginaService, 
              public productosService: ProductosService) {


    }

}
