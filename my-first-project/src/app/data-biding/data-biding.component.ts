import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{

  public nome: string = "Marjorie";
  public idade: number = 24;
  public maisUm: number = 1;

  public botaoDesligado: boolean = true; 
  public imgSrc: string = "https://i.pinimg.com/originals/10/fc/86/10fc869db0963aa2cb3631fb05288f26.jpg"
  
  public position: {x: number, y: number} = {x: 0, y: 0};
  constructor (){ }
  ngOnInit(): void { }
  public alertaInfo (valor: any){
    console.log(valor); }

  public mouseMoveTeste(valor: any) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;}
}