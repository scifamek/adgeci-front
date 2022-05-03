import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() items!: {
    display: string;
    route: string;
  }[];

  @Input('header-icon') headerIcon!: string;

  constructor() {}

  ngOnInit(): void {}
}
