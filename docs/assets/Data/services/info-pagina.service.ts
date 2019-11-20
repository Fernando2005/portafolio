import { Injectable } from '@angular/core';
import { compileNgModule } from '@angular/compiler';
import { logging } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../../../app/interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    equipo: any[] = [];

  constructor( private http: HttpClient) { 

this.cargarInfo();
this.cargarEquipo();

  }

private cargarInfo () {
  /*  console.log('Servicio de infoPagina listo'); */
   /*  Leer el archivo json */
   this.http.get('assets/Data/Data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      /* console.log ( resp ); */
    }); 
}

private cargarEquipo () {

  /*  console.log('Servicio de infoPagina listo'); */
   /*  Leer el archivo json */
   this.http.get('https://angular-html-4704f.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
     //console.log ( resp );
    });

}
}
