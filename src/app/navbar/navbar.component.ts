import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isLoggedin : boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isLoggedin = localStorage.getItem('token') ? true : false
  }

  logout(): void{
    localStorage.removeItem('token');
    this.isLoggedin = false;
  }

}
