import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewAnimalPageRoutingModule } from './view-animal-routing.module';
import { ViewAnimalPage } from './view-animal.page';

describe('ViewAnimalPage', () => {
  let component: ViewAnimalPage;
  let fixture: ComponentFixture<ViewAnimalPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewAnimalPage],
      imports: [
        IonicModule.forRoot(),
        ViewAnimalPageRoutingModule,
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
