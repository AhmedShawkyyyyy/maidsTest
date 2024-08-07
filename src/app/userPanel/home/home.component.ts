import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { user } from '../model/user';
import { Router } from '@angular/router';
import { LoaderService } from '../controllers/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private loader: LoaderService) {}
  users: user[] = [];
  //===search method====//
  @Input()
  searchText: number = 0;
  receiveSearchText(value: number) {
    this.searchText = value;
    //console.log('value received from home component:', this.searchText);
  }
}
