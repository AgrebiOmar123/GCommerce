import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../../services/auth/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
 // standalone: true,

})
export class SidebarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
  }
}
