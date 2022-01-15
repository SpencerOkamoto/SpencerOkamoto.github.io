import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  medecc = "MedECC";
  medecc_des = 'Covid-19 Telehealth App for Remote Patient-Doctor Communication';
  medecc_info = "MedECC is a covid-19 telehealth platform aiming to relieve healthcare burdens during the covid-19 pandemic. From user research at UCSD medical center, the pain points for healthcare workers comes from: the number of patients, exposure, and triage care. From resources to staffing shortages, MedECC promotes an exposure-less and faster coordination within a specific network: local or global.";

  salton = "Seisimic Trends of the Salton Sea";
  salton_des = 'Investigation of Geothermal and Lithium Mining on the Southern San Andreas Fault';
  salton_info = "investigation from kilb to paper";

  constructor() { }

  ngOnInit(): void {
  }

}
