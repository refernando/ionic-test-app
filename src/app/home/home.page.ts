import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { AnimalComponent } from '../animal/animal.component';

import { DataService, Animal } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private dataService = inject(DataService);
  protected data: Animal[] = [];
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this.dataService
      .getAnimals()
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        console.log(data);
      });
  }
}
