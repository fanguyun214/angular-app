import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinindex',
  templateUrl: './joinindex.component.html',
  styleUrls: ['./joinindex.component.scss']
})
export class JoinindexComponent implements OnInit {
  input: any;
  value: any;
  cityList: Array<{ label: string; value: string }>;
  constructor() {}

  ngOnInit() {
    this.cityList = [
      { label: '深圳', value: '深圳' },
      { label: '深圳2', value: '深圳2' }
    ];
  }
  handle(e): void {}
  clear(): void {}
}
