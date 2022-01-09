import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  medecc = "MedECC | Covid-19 Telehealth App";
  medecc_info = "info about user personas and daily.co apis";

  salton = "Seisimic Trends of the Salton Sea";
  salton_info = "investigation from kilb to paper";

  constructor() { }

  ngOnInit(): void {
  }

}
