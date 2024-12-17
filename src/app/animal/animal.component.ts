import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Animal } from '../services/data.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalComponent {
  private platform = inject(Platform);
  @Input() animal?: Animal;
  isIos() {
    return this.platform.is('ios')
  }
}
