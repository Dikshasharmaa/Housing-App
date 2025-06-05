import { Injectable } from '@angular/core'; //decorator makes the class available for dependency injection, so it can be used in components.
import { HousingLocation } from './housing-location';


@Injectable({
  providedIn: 'root' // makes it available throughout the app
})
export class HousingService {  //The service has a property housingLocationList which holds an array of housing data
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id:number):Promise<HousingLocation|undefined>{
    const data = await fetch(`${this.url}/ ${id}`);
    return await data.json()?? {};
  }

  submitApplication(firstName:string, lastName: string, email:string){
    console.log(firstName, lastName, email);
  }
}
