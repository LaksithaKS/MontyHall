import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as $ from "jquery";
import {CommonHTTPRequestsService} from '../../services/common-httprequests.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  moved = false;
  Total
  WinCount
  Percentage

  constructor(
    public commonHTTPRequestsService: CommonHTTPRequestsService
    ) { }

  montyHallForm: FormGroup = new FormGroup({
    numberOfGames: new FormControl(0),
    changeTheDoor: new FormControl(false)
  });

  ngOnInit(): void {
    $('.rightForm').css({ 'transform': 'translate(-500px,0px)' });
  }

  clearResult(){
    $('.rightForm').css({ 'transform': 'translate(-500px,0px)' });
    this.Total = 0;
    this.WinCount = 0;
    this.Percentage = 0;
  }

  getResult(){
    if(!this.moved){
      const numberOfGames = this.montyHallForm.value.numberOfGames;
      const changeTheDoor = this.montyHallForm.value.changeTheDoor;

      this.commonHTTPRequestsService.getData(numberOfGames, changeTheDoor)
      .subscribe({
          next: (response) => {
              this.Total = response.total;
              this.WinCount = response.winCount;
          },
          error: (error) => {
              console.log(error);
          }
      });

      $('.rightForm').css({ 'transform': 'translate(500px,0px)' });

    }
  }
}