import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Animal } from '../services/data.service';

@Component({
  selector: 'app-view-animal',
  templateUrl: './view-animal.page.html',
  styleUrls: ['./view-animal.page.scss'],
})
export class ViewAnimalPage implements OnInit {
  protected animal!: Animal;
  private dataService = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getAnimalById(id);
  }

  getAnimalById(id: string) {
    this.dataService
      .getAnimalById(parseInt(id, 10))
      .then((res) => res.json())
      .then((data) => {
        this.animal = data;
        console.log(data);
      });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Inbox' : '';
  }
}
