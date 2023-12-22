import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './About me page/about-me.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonicModule, RouterModule, AboutMeComponent, SkillsPageComponent, WorkExperienceComponent],
})
export class HomePage {
  constructor() {}

  isHidden: boolean = true;

  toggleCollapsible(targetId: string) {
    this.isHidden = !this.isHidden;
  }

  scrollToHome(): void {
    const targetDiv = document.getElementById('Home');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.isHidden = true;
    }
  }

  scrollToAboutMe(): void {
    const targetDiv = document.getElementById('AboutMe');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.isHidden = true;
    }
  }

  scrollToAboutMeInMobile(): void {
    const targetDiv = document.getElementById('AboutMeMobile');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.isHidden = true;
    }
  }

  scrollToSkills(): void {
    const targetDiv = document.getElementById('Skills');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.isHidden = true;
    }
  }

  scrollToWorkExperience(): void {
    const targetDiv = document.getElementById('WorkExperience');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.isHidden = true;
    }
  }

  scrollToWorkExperienceInMobile(): void {
    const targetDiv = document.getElementById('WorkExperienceInMobile');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.isHidden = true;
    }
  }
}
