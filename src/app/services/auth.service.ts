import { Injectable } from '@angular/core';
import { ILoginUser, IUser } from '../models/IUser.model';
import { LocalStorageKeys } from '../constants/local-storage-keys.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginUser: ILoginUser) {
    let users = [];

    if (localStorage.getItem(LocalStorageKeys.Users)) {
      users = JSON.parse(localStorage.getItem(LocalStorageKeys.Users))
    }

    return users.find((x: IUser) => x.email == loginUser.email && x.password == loginUser.password)

  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem(LocalStorageKeys.Token) || null)
  }

}
