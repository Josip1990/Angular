import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent {
  dogs: any;
  constructor(private api: ApiService) {
    this.api.getRandom().subscribe((res) => {
      this.dogs = res;
    });
  }
}
