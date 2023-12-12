
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private sidebarVisible: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  sidebarToggle() {
    const body = document.getElementsByTagName('body')[0];

    if (!this.sidebarVisible) {
      body.classList.add('side-nav');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('side-nav');
    }
  }
  
}
