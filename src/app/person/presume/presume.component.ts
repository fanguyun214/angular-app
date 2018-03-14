import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presume',
  templateUrl: './presume.component.html',
  styleUrls: ['./presume.component.css']
})
export class PresumeComponent implements OnInit {
  labelPosition: string = 'left';
  validateForm: FormGroup;
  validateForm2: FormGroup;
  validateForm3: FormGroup;
  validateForm4: FormGroup;
  constructor(
    @Inject(forwardRef(() => FormBuilder))
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  submit(): void {
    console.log(this.validateForm.value);
  }
  submit2(): void {
    console.log(this.validateForm2.value);
  }
  submit3(): void {
    console.log(this.validateForm3.value);
  }
  submit4(): void {
    console.log(this.validateForm4.value);
  }
  reset(): void {
    this.validateForm.reset();
  }
  handleMaolink(name): void {
    let offTop = document.getElementById(name).offsetTop;
    document.body.scrollTop = document.documentElement.scrollTop = offTop;
    this.router.navigate(['presume'], { fragment: name });
  }
  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item];
  }

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return;
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('status')
      ? control.errors.status
      : '';
  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return;
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('message')
      ? control.errors.message
      : '';
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: ['张三', [this.cityValidator]],
      sex: ['man'],
      phone: ['13866003322'],
      email: ['2897987989@gmail.com'],
      address: ['广东省深圳市福田区沙头街道新洲七街36号绿景新苑'],
      time: ['2000-03-01']
    });
    this.validateForm2 = this.formBuilder.group({
      schoolName: ['华南理工大学'],
      times: ['2008-2012'],
      majorName: ['计算机科学与应用'],
      education: ['本科'],
      remark: ['在校期间表现优异，学生会主席']
    });
    this.validateForm3 = this.formBuilder.group({
      comName: ['腾讯科技有限公司'],
      times: ['2012.6-2014.8'],
      job: ['产品经理'],
      money: ['保密'],
      remark: ['负责腾讯QQ音乐产品需求与优化']
    });
    this.validateForm4 = this.formBuilder.group({
      money: ['20K+'],
      jobs: ['产品经理、总监'],
      tims: ['1个月内'],
      org: ['互联网']
    });
  }

  cityValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '请填写姓名' };
    }
    return { status: 'success' };
  };
}
