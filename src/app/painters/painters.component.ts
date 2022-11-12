import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'
import { Painter } from '../interface/painter'

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.css']
})
export class PaintersComponent implements OnInit {
  painters: any = [];
  painter!: any
  error: string = ""
  succes: string = ""

  constructor(private painterService: PainterService) { }

  ngOnInit(): void {
    this.onGetPainters()
  }

  onGetPainters(): void {
    this.painterService.getPainters().subscribe({
      next: (responce: any) => {
        this.painters = responce
        console.log(JSON.stringify(responce))
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
      },
      complete: () => {
        this.succes = "Done getting all painters"
        console.log("Done getting all painters")
      }
    });
  }

  onGetPainter(): void {
    this.painterService.getPainter().subscribe({
      next: (responce: any) => {
        this.painter = responce
        console.log(JSON.stringify(responce))
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
      },
      complete: () => {
        this.succes = "Done getting all painters"
        console.log(`Done getting painter with id = ${this.painter.data.id}`)
      }
    })
  }

  onShowAllPaintersButtonClick(): void {
    this.onGetPainters()
  }

}
