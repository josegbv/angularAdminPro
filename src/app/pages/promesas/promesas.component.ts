import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

 


  constructor() { }

  ngOnInit() {
    const promesaMia= new Promise((resolve, reject)=>{
      resolve('se resolvio la promesa');
      reject('hubo un error');
});

promesaMia.then((mensaje)=>{
  console.log(mensaje);
}).catch(err=>{
  console.log(err)
})

console.log("aqui se esta haciendo")

  }

}
