import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { LocalStorageKeys } from '../constants/local-storage-keys.constant';
import { IUser } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private route = 'user';

  constructor(private baseService: BaseService) { }

  public addUsers(user: IUser) {
    const users: IUser[] = JSON.parse(localStorage.getItem(LocalStorageKeys.Users) || '[]');
    users.push(user);

    localStorage.setItem('Users', JSON.stringify(users));
  }

}
