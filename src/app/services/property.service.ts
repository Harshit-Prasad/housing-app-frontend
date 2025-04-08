import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../models/IProperty.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private http: HttpClient
  ) { }

  public async getProperties(buySell: number): Promise<Observable<any>> {
    return this.http.get('data/properties.json')
      .pipe(map((data: Array<IProperty>) => {
        const properties: Array<IProperty> = [];

        for (const id in data) {
          const condition = buySell ? buySell == data[id].SellRent : true;

          if (data.hasOwnProperty(id) && condition) {
            properties.push(data[id])
          }
        }

        return properties;
      }));
  }

}
