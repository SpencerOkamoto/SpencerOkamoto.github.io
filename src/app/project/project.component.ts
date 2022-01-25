import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  medecc = "MedECC";
  salton = "Seisimic Trends of the Salton Sea";
  third = "placeholder";

  constructor() { }

  ngOnInit(): void {
  }

}
