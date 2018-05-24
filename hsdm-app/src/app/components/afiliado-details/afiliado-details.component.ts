import { Component, OnInit, Input } from '@angular/core';
import { IPersona } from '../../models/Interfaces/ipersona';
import { ActivatedRoute } from '@angular/router';
import { AfiliadosService } from '../../afiliados.service';

@Component({
  selector: 'hsdm-afiliado-details',
  templateUrl: './afiliado-details.component.html',
  styleUrls: ['./afiliado-details.component.scss']
})
export class AfiliadoDetailsComponent implements OnInit {
  @Input() afiliado:IPersona;
  private afiliados: IPersona[];
  constructor( private route: ActivatedRoute , private AfiliadosServices:AfiliadosService) {
      this.afiliados= AfiliadosServices.getAfiliados();
      this.afiliado = this.getAfiliado();
   }

   getAfiliado():IPersona {
    let afiliadoEdit:IPersona 
    const id = +this.route.snapshot.paramMap.get('id');
    afiliadoEdit = this.afiliados.find(function(element) {
      return element.id == id;
    });
    
    return afiliadoEdit;
  }
  ngOnInit() {
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