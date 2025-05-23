import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IProperty } from 'src/app/models/IProperty.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  properties!: Array<IProperty>;

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.getProperties();
  }

  async getProperties() {
    (await this.propertyService.getProperties(0)).subscribe((response: Array<IProperty>) => {
      this.properties = response;
    }, (err: Error) => {
      console.error(err.message);
    })
  }

}
