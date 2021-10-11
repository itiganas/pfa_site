import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.css']
})
export class AcasaComponent implements OnInit {
  openLinkedin(){
    window.open("https://www.linkedin.com/in/natalia-catana-a96a3513a/")
  }

  openMail(){
    window.open("mailto:catananatalia9@gmail.com")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
