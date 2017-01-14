import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ITEMSS } from './itemss';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    logoDatas: {
        name: string,
        pass: any,
        email: any,
        givePass: any
    } = {
        name: '',
        pass: '',
        email: '',
        givePass: ''
    };
    nameb: boolean = true;
    items: boolean = false;
    readonly ITEM = ITEMSS;

    constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) { }

    private presentToast(mge, proper) {
        let toast = this.toastCtrl.create({
            message: mge,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(() => {
          this.logoDatas[proper]='';
        });
        toast.present();
    }

    onItems() {
        console.log(this.items);
        this.navCtrl.push(AboutPage)
    }

    nameCheck() {
        if (this.logoDatas.name === '') {
            this.presentToast("用户名不能为空！", "name");
            this.nameb = false;
        }
        else if (!/([\u4e00-\u9fa5\sa-zA-Z]){2,10}/.test((this.logoDatas.name).trim())) {
            this.presentToast("用户名只能是2~10个英文和中文。", "name");
            this.nameb = false;
        }
        else if("TODO"){
          //TODO 服务器返回检查用户名是否相同
        }
        else {
            this.nameb = true;
        }
    }
}
