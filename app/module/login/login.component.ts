import { Component } from '@angular/core'

import { LoginService } from '../../service/login/LoginService'
import { User } from '../../entity/User'

@Component({
    selector: 'login',
    templateUrl: '/app/module/login/login.html',
    styleUrls:['/app/module/login/login.css']
})

export class LoginComponent { 
    hasError: boolean = false;
    user: User = {
        name:'',
        password:''
    };

    op_login(user: User) {
        console.log(user);
        if(user.name!="admin") {
            this.isError();
        } else {
            this.clearError();
        }
    }

    isError() {
        this.hasError = true;
    } 

    clearError() {
        this.hasError = false;
    }
 }