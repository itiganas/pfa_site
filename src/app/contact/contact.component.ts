import { Component, OnInit } from '@angular/core';
// @ts-ignore
import iaka from "../_files/countries.json";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public innaList:{name:string, code:string}[] = iaka;
  constructor() { }

  ngOnInit(): void {
  }

}
