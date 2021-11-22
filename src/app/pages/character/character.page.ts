import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  character:any;
  iconname = 'skull';
  constructor(private obtSwaServ:SwapiService) { }

  ngOnInit() {
    this.character=this.obtSwaServ.getSwapi('character');
   /*this.obtSwaServ.getSwapi('character').subscribe(data=>{
      this.character=data;
      console.log(data);
    })*/
  }

}
