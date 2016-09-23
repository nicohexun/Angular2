import { Injectable } from '@angular/core';

import { User } from '../../entity/User';

@Injectable()
export class LoginService {

    private user: User;

    getUserInfo(): User {
        return this.user;
    }

    login() {
        //TODO 
    }
}