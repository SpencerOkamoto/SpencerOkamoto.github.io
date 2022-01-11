import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = "Spencer Okamoto";
  about = "I recently graduated from UC San Diego with a degree in Cognitive Science specializing in Human Computer Interaction.";

  constructor() { }

  ngOnInit(): void {
  }

}
