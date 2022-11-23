import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'

@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.css']
})
export class PainterComponent implements OnInit {
  painters: any = [];
  painter: any
  error: any
  succes: any

  constructor(private painterService: PainterService) { }

  ngOnInit(): void {
    this.onGetPainters()
  }

  onGetPainters(): void {
    this.painterService.getPainters().subscribe({
      next: (responce: any) => {
        this.painters = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painters = []
      },
      complete: () => {
        this.succes = "Done getting all painters"
        console.log("Done getting all painters")
      }
    });
  }

  onGetPainter(): void {
    let id = (<HTMLInputElement>document.getElementById('painterID')).value
    this.painterService.getPainter(Number(id)).subscribe({
      next: (responce: any) => {
        this.painter = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painter = ""
      },
      complete: () => {
        this.succes = "Done getting all painters"
        console.log(`Done getting painter with id = ${this.painter.data.id}`)
      }
    })
  }

  onShowPainterButtonClick(): void {
    this.onGetPainter()
  }

}
