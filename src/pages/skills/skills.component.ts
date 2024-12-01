import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  programmingLanguages = [
    { name: 'KOTLIN' },
    { name: 'JAVA' },
    { name: 'C#' },
    { name: 'PYTHON' },

  ]

  databaseTech = [
    { name: 'RELATIONAL DATABASES' },
    { name: 'SQL' },
    { name: 'MSSQL SERVER' },
    { name: 'IBM DB2' }
  ]

  frameworks = [
    { name: 'SPRING BOOT' },
    { name: 'HIBERNATE' },
    { name: 'SPRING DATA JPA' },
    { name: 'JUNIT' }
  ]

  otherTools = [
    { name: "REST APIS" },
    { name: 'GIT' },
    { name: 'GITLAB' },
    { name: 'INTELLIJ IDEA' }
  ]

  process = [
    { name: 'CI / CD PIPELINES' },
    { name: 'SPLUNK' },
    { name: 'AGILE' },
    { name: 'JIRA' }
  ]

  sections = [
    {
      title: 'LANGUAGES',
      items: this.programmingLanguages
    },
    {
      title: 'DATABASES',
      items: this.databaseTech
    },
    {
      title: 'FRAMEWORKS',
      items: this.frameworks
    },
    {
      title: 'TOOLS',
      items: this.otherTools
    },
    {
      title: 'PROCESS',
      items: this.process
    }
  ];

}
