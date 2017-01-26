import { AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


//密码与重复密码是否相等验证器
export function equire(cur: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let p: any;
        let rep = control;

        if (control.root.get(cur)) {
            p = control.root.get(cur);
        }

        if (rep.dirty && p.dirty && rep.value !== p.value) {
            return { equire: "重复密码与密码不一致。" }
        }
        else {
            return null;
        }
    }
}

//TODO：正时需获取服务器上数据，异步验证是存在与服务器上的同名：测试
export function repare(): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return Observable.from(['测试', '张三', 'marry', '李四', 'sc@163.com'])
            .delay(3000) //设成3000失灵
            .find(data => data === control.value)
            .map(data => {
                if (data) {
                    return { repare: "用户名已存在。" };
                }
                else {
                    return null;
                }
            })
    }
}
