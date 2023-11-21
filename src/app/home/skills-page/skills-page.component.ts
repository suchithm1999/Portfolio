import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonicModule, RouterModule],
})
export class SkillsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
