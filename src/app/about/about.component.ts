import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = "Spencer Okamoto";
  medecc = "Front-End and User Interface | Covid-19 Telemedicine Web App"
  salton = "Python and Independent Research | San Andreas Fault Behaviors and Trends in Southern California";

  constructor() { }

  ngOnInit(): void {
  }

}
