import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {NgForOf} from '@angular/common';
import {QuotesComponent} from '../../components/quotes/quotes.component';

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

  primaryLanguages = [
    { name: 'KOTLIN' },
    { name: 'JAVA' },
    { name: 'C#' },
    { name: 'PYTHON' },
    { name: 'SQL' },
  ]

  databaseTech = [
    { name: 'RELATIONAL DATABASES' },
    { name: 'MSSQL SERVER' },
    { name: 'IBM DB2' },
    { name: 'QMF' },
    { name: 'MONGODB'}
  ]

  spring = [
    { name: 'SPRING BOOT' },
    { name: 'HIBERNATE' },
    { name: 'SPRING DATA JPA' },
    { name: 'SPRING SECURITY' },
    { name: 'SPRING MVC' }
  ]

  versionControl = [
    { name: 'GIT' },
    { name: 'GITLAB' },
    { name: 'GITHUB' },
    { name: 'CI / CD PIPELINES' },
    { name: 'JIRA' }
  ]

  process = [
    { name: "REST APIS" },
    { name: 'SPLUNK' },
    { name: 'AGILE' },
    { name: 'INTELLIJ IDEA' },
    { name: 'SWAGGER' }
  ]

  devOpsTools = [
    { name: 'KUBERNETES' },
    { name: 'DOCKER' },
    { name: 'GRADLE'},
    { name: 'JUNIT' },
    { name: 'MOCKITO'}
  ]

  sections = [
    {
      title: 'LANGUAGES',
      items: this.primaryLanguages
    },
    {
      title: 'DATABASES',
      items: this.databaseTech
    },
    {
      title: 'SPRING',
      items: this.spring
    },
    {
      title: 'VERSION CONTROL',
      items: this.versionControl
    },
    {
      title: 'PROCESS',
      items: this.process
    },
    {
      title: 'DEVOPS TOOLS',
      items: this.devOpsTools
    }
  ];

}
