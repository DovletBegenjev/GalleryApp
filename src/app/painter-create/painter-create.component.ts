import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'
import { Painter } from '../interface/painter';

@Component({
  selector: 'app-painter-create',
  templateUrl: './painter-create.component.html',
  styleUrls: ['./painter-create.component.css']
})
export class PainterCreateComponent implements OnInit {
  painter: Painter = { "name":"", "surname":"", "birthDate":"", "placeOfBirth":"", "genre":"", "style":"", "picFileName":"" };
  error: any
  success: any

  constructor(private painterService: PainterService) { }

  ngOnInit(): void {
  }

  onCreatePainter(): void {
    this.painter.name = (<HTMLInputElement>document.getElementById('name')).value
    this.painter.surname = (<HTMLInputElement>document.getElementById('surname')).value
    this.painter.birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value
    this.painter.placeOfBirth = (<HTMLInputElement>document.getElementById('placeOfBirth')).value
    this.painter.genre = (<HTMLInputElement>document.getElementById('genre')).value
    this.painter.style = (<HTMLInputElement>document.getElementById('style')).value
    this.painter.picFileName = (<HTMLInputElement>document.getElementById('picFileName')).value
    
    this.painterService.createPainter(this.painter).subscribe({
      next: (responce: any) => {
        this.painter = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        // this.painter = 
      },
      complete: () => {
        this.success = "Художник успешно создан"
        console.log("Done creating painter")
      }
    });
  }

}
