import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  // readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png';

  protected HousinglocationList: Housinglocation[] = [

  {
    id: 1,
    name: 'Mieszkanie 1',
    city: 'Gdansk',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 2,
    name: 'Mieszkanie 2',
    city: 'Wrocław',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 3,
    name: 'Mieszkanie 3',
    city: 'Katowice',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 4,
    name: 'Mieszkanie 4',
    city: 'Łódź',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 5,
    name: 'Mieszkanie 5',
    city: 'Poznań',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 6,
    name: 'Mieszkanie 6',
    city: 'Szczecin',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 7,
    name: 'Mieszkanie 7',
    city: 'Warszawa',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: true
  },
  {
    id: 8,
    name: 'Mieszkanie 8',
    city: 'Opole',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  },
  {
    id: 9,
    name: 'Mieszkanie 9',
    city: 'Rzeszów',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1593174240/8546.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  }
  ];
  getAllHousingLocation(): Housinglocation[] {
    return this.HousinglocationList;
  }

  getHousingLocationById(id:number): Housinglocation | undefined {
    return this.HousinglocationList.find(Housinglocation => Housinglocation.id === id )
  }
}
