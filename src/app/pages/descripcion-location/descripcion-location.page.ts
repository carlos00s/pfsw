import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-location',
  templateUrl: './descripcion-location.page.html',
  styleUrls: ['./descripcion-location.page.scss'],
})
export class DescripcionLocationPage implements OnInit {

  location:any;

  constructor(private miActRou: ActivatedRoute,private miSwapiServ: SwapiService) { }

  ngOnInit() {
    this.miActRou.paramMap.subscribe((params)=> {
      let id= params.get('id');
      console.log(id);
      this.location = this.miSwapiServ.getSwapi(`location/${id}`).subscribe(data => {
        this.location = data;
        console.log(data)
      });
    });
    
  }

}