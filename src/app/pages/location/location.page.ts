import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  location:any;
  iconname = 'earth';
  constructor(private obtSwaServ2:SwapiService) { }

  ngOnInit() {
    this.location=this.obtSwaServ2.getSwapi('location');
   /*this.obtSwaServ.getSwapi('location').subscribe(data=>{
      this.location=data;
      console.log(data);
    })*/
  }

}