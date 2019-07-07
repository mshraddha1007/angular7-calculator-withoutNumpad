import { Component, OnInit } from '@angular/core';
import { resetComponentState } from '@angular/core/src/render3/state';
import { isNull } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public num1:number;
  public num2:number;
  public result: number;



  sum(){
        this.result = this.num1+this.num2;
      
  }

  diff(){
    this.result = this.num1-this.num2;
  }

  mult(){
    this.result = this.num1*this.num2;
  }

  div(){
    this.result = this.num1/this.num2;
  }

  clear(){
    this.num1= null;
    this.num2= null;
    this.result=null;
  }

  constructor() { }

  ngOnInit() {
  }

}
