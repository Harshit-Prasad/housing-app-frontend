import { Component } from '@angular/core';
import { IProperty } from 'src/app/models/IProperty.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-rent-property',
  templateUrl: './rent-property.component.html',
  styleUrls: ['./rent-property.component.scss']
})
export class RentPropertyComponent {
  properties!: Array<IProperty>;

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.getProperties();
  }

  async getProperties() {
    (await this.propertyService.getProperties(2)).subscribe((response: Array<IProperty>) => {
      this.properties = response;
    }, (err: Error) => {
      console.error(err.message);
    })
  }
}
