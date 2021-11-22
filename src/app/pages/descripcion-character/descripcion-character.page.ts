import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-character',
  templateUrl: './descripcion-character.page.html',
  styleUrls: ['./descripcion-character.page.scss'],
})
export class DescripcionCharacterPage implements OnInit {

  character:any;

  constructor(private miActRou: ActivatedRoute,private miSwapiServ: SwapiService) { }

  ngOnInit() {
    this.miActRou.paramMap.subscribe((params)=> {
      let id= params.get('id');
      console.log(id);
      this.character = this.miSwapiServ.getSwapi(`character/${id}`).subscribe(data => {
        this.character = data;
        console.log(data)
      });
    });
    
  }

}
