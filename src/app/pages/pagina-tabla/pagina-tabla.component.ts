import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterfaces';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']

})
export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  columnTabla:any;
  //listMenu:MenuItem[]=[];
  loading = false;

  //activeItem!:MenuItem;
  constructor(private rutas: Router,
              private empleadoService:EmpleadoService,
              private mensajes: MessageService){

  }

  ngOnInit(): void {
    this.inicioColumnaTabla();
    //this.inicioMenu();
    console.log('hola estoy aqui desde ngOninit')
    // this.empleadoService.getAllEmployee().subscribe(
    //   (datos) => {
    //     console.log(datos);
    //     this.listEmpleado = datos.data;
    //   }, (error) => {
    //     console.log(error);
    //   }
    // );
    this.loading=true;
    this.empleadoService.getAllEmployee().subscribe({
      next:(datos) => {
        console.log(datos);
        this.listEmpleado = datos.data;
        this.loading=false;
        this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
      }, 
      error:(err) => {
        console.log(err);
        this.loading=false;
        this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });

      }
    });
  }
  inicioColumnaTabla(){
    this.columnTabla = [
      {
        field: 'id', header: 'ID'
      },
      {
        field: 'name', header: 'Nombre Empleado'
      },
      {
        field: 'salary', header: 'Salario Empleado'
      },
      {
        field: 'edad', header: 'Edad'
      }    
    ]
  }
    
  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }
}

