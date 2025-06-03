import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';  //Retrived information from route in a component using this feature
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class ="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class ="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
        </section>
    </article>    


  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}
