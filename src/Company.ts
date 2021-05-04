import faker from 'faker'
import {Mappable} from './CustomMap'


export class Company implements Mappable {
  comapnyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.comapnyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

  }

  markerContent(): string {
    return `Company Name: ${this.comapnyName}`
  }
}