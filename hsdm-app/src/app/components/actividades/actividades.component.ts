import { Component } from '@angular/core';

@Component({
  selector: 'actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  cards = [
    { title: 'Dia de Madre', cols: 2, rows: 1 },
    { title: 'Celebracionb de 28 Julio', cols: 1, rows: 1 },
    { title: 'Procesión', cols: 1, rows: 2 },
    { title: 'Navidad', cols: 1, rows: 1 }
  ];
}
