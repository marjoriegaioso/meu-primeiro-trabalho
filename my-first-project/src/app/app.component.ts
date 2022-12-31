import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-title *ngIf="destruir"></app-tittle>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
  --> 
  <!-- app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!--
   <app-diretivas-atributos>
    <h1> Aula de Diretivas Atributos</h1>
    <h3> Aula final </h3>
  </app-diretivas-atributos>
  
  <app-diretivas-atributos>
    <h1> Marjorie </h1>
    <h3> Bird </h3>
  </app-diretivas-atributos>
  <router-outlet></router-outlet>
  <app-diretivas-atributos></app-diretivas-atributos> -->
  
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit { 
  
  constructor (){}
  ngOnInit(): void {} 

}

