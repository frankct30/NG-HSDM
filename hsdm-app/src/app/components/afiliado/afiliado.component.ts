import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { IPersona } from '../../models/Interfaces/ipersona';
import { SelectionModel } from '@angular/cdk/collections';
import { AfiliadosService } from '../../afiliados.service';

@Component({
  selector: 'hsdm-afiliado',
  templateUrl: './afiliado.component.html',
  styleUrls: ['./afiliado.component.scss']
})
export class AfiliadoComponent {
  displayedColumns = ['Id', 'Nombre', 'Apellido', 'Celular','Email','select'];
  dataSource: MatTableDataSource<IPersona>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<IPersona>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  editAfiliado(row){
    debugger
    this.selection.isSelected(row);
  }
  constructor(private AfiliadosServices:AfiliadosService) {   
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(AfiliadosServices.getAfiliados());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


/*const AFILIADOS_DATA: IPersona[] = [
  {id:1, nombre:'Vicente', apellido: 'Ramirez', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:2, nombre:'Marcos', apellido: 'Escajadillo', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:3, nombre:'Danisa', apellido: 'Pautasso', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:4, nombre:'Mariana', apellido: 'Ojeda', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:5, nombre:'Erla', apellido: 'Ahumada', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:6, nombre:'Feliciano', apellido: 'Tamayo', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:7, nombre:'Lucy', apellido: 'Rojas Visalot', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:8, nombre:'Hernan', apellido: 'Yslas', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:9, nombre:'Luz', apellido: 'Temoche', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:10, nombre:'Jorge', apellido: 'Villanueva', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:11, nombre:'Jorge', apellido: 'Mediana', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:12, nombre:'Norma', apellido: 'Carpio', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:13, nombre:'Micaela', apellido: 'Leguizamon', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:14, nombre:'Lida', apellido: 'De Leguizamon', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:15, nombre:'Susana', apellido: 'Garcia', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}, 
  {id:16, nombre:'Juan', apellido: '008', email:'vicente@ramirez.com', celular: '1234567890',direccion:'Av.SiempreVIVA1' , fechaNacimiento:'01/02/1985', fechaAfiliacion:'15/10/2005', estaComisionDirectiva:true}

];*/




