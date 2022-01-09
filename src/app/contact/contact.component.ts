import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phone = "(925) "+"597 "+"2930";
  email = "szokamot@ucsd.edu";
  linkedin = "https://www.linkedin.com/in/spencer-okamoto-113400227/"

  constructor() { }

  ngOnInit(): void {
  }

}
