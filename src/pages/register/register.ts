import { Component, ViewChildren,  QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, ModalController, TextInput } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { TermPage } from '../term/term';
import { equire, repare } from '../../fnctions/valids';



@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    @ViewChildren(TextInput) inputs: QueryList<TextInput>;

    regForm: FormGroup;
    termb: boolean = true
    ch: boolean = false;

    spring: boolean = false;
    flag: boolean = true;

    spname: string = '';

    messages = {
        name: {
            required: "用户名不能为空。",
            minlength: "用户名最小长度不能小于2位。",
            maxlength: "用户名最大长度不能大于10位。",
            pattern: "用户名只能是英文字母或中文。",
            repare: "用户名已存在。"
        },
        pass: {
            required: "密码不能为空。",
            minlength: "密码最小长度必须6位以上。",
            pattern: "密码必须包括一个除数字之外的字符。",
            equire: "密码与重复密码不一致。"
        },
        repass: {
            equire: "重复密码与密码不一致。",
        },
        email: {
            required: "Email不能为空。",
            pattern: "Email格式不对。",
            repare: "Email已被注册。"
        },
        givePass: {
            required: "密码不能为空。",
            minlength: "密码最小长度必须6位以上。"
        }
    }

    constructor(private fb: FormBuilder, private toastCtrl: ToastController, private modalCtrl: ModalController) {this.onFromCheck(); }

    ionViewWillEnter() {
        for (const input of this.inputs.toArray()) {
            input.blur.subscribe(() => {
                this.onBlur(input.inputControl.name);
            })
        }
    }

    ionViewWillLeave(){

    }
    //表单控制器初始
    private onFromCheck() {
        this.regForm = this.fb.group({
            name: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(10),
                Validators.pattern(/^([\u4e00-\u9fa5a-zA-Z])+\s?([\u4e00-\u9fa5a-zA-Z])+$/),
            ], repare()],
            pass: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.pattern(/\D+/),
                equire("repass")
            ]],
            repass: ['', equire('pass')],
            email: ['', [
              Validators.required,
              Validators.pattern(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
            ], repare()],
            givePass: ['', [
                Validators.required,
                Validators.minLength(6)
            ]]
        });
    }
    //input失出焦点检查
    onBlur(controlName: string) {
      if(controlName === "name"){
        this.spname = "用户名";
      }
      else if(controlName === "email"){
        this.spname = "Email";
      }

         let time = 0;

         let control = this.regForm.get(controlName)
         if(control.dirty){
           for (const key in control.errors){
             if(key !== 'repare'){
               Observable.of(key)
               .delay(time)
               .subscribe((key)=>{
                 this.presentToast(this.messages[controlName][key])
               });

               time +=2000;
             }
           }

           if(!control.errors && this.flag){
             this.spring = true;
             this.flag = false;
            }
           control.statusChanges.first().subscribe(() => {
             this.spring = false;
             control.valueChanges.subscribe(()=>{
               this.flag = true;
             })
             if(control.invalid && control.errors['repare']){

                 this.presentToast(this.messages[controlName]['repare']);
               }

           });
         }
    }

    //弹框提示
    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            cssClass: 'ltoast',
            message: message,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }


    //使用条款
    presentModal() {
        this.termb = false;
        let modal = this.modalCtrl.create(TermPage);
        modal.present();
    }

    onSubmit(){
      console.log(JSON.stringify(this.regForm.value));
    }
}
