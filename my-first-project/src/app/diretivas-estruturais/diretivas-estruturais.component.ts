import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  public condition: boolean = true; 
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Marjorie Gaioso", idade: 23},
    { nome: "Cleber Cascales", idade: 30},
    { nome: "Bird", idade: 2},
    { nome: "Lily", idade: 1}
] 
  // poderia colocar any no lugar de array
  public nome: string = 'Marjorie';
  constructor(){}

  ngOnInit(): void {
    setInterval(()=> {
      if (this.condition){
        this.condition = false;
      } else{
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if (this.conditionClick){
      this.conditionClick = false;
    } else{
      this.conditionClick = true;
    }
  }
  public onClickAddList(){
    this.list.push({nome: "Bem", idade: 31});
  }
  public onClickEventList (event: number){
    this.list.splice(event, 1)

  }   
}
