import { Component } from '@angular/core';

@Component({
  selector: 'head-select',
  template: `
    <div el-row>
    <div el-col span="6">
      13246
    </div>
    <div el-col span="16">
      <el-menu theme="dark" [model]="0" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">{{title}}</el-menu-item>
        <el-submenu index="2" title="我的工作台">
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://github.com/eleme/element-angular" target="_blank">GITHUB</a></el-menu-item>
      </el-menu>
    </div>
  </div>
  `,
  styles: []
})

export class HeadComponent {
  title = '处理中心';
}
