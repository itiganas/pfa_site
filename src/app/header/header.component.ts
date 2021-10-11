import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openLinkedin(){
    window.open("https://www.linkedin.com/in/natalia-catana-a96a3513a/")
  }

  openMail() {
    window.open("mailto:catananatalia9@gmail.com")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
