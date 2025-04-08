import { Component } from '@angular/core';
import { IProperty } from 'src/app/models/IProperty.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-buy-property',
  templateUrl: './buy-property.component.html',
  styleUrls: ['./buy-property.component.scss']
})
export class BuyPropertyComponent {
  properties!: Array<IProperty>;

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.getProperties();
  }

  async getProperties() {
    (await this.propertyService.getProperties(1)).subscribe((response: Array<IProperty>) => {
      this.properties = response;
    }, (err: Error) => {
      console.error(err.message);
    })
  }
}
