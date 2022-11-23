import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'

@Component({
  selector: 'app-painter-delete',
  templateUrl: './painter-delete.component.html',
  styleUrls: ['./painter-delete.component.css']
})
export class PainterDeleteComponent implements OnInit {
  painters: any = [];
  painter: any
  error: any
  success: any

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
        //this.success = "Done getting all painters"
        console.log("Done getting all painters")
      }
    });
  }

  onDeletePainter(): void {
    let id = (<HTMLInputElement>document.getElementById('painterID')).value
    this.painterService.deletePainter(Number(id)).subscribe({
      next: (responce: any) => {
        this.painter = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painter = ""
        this.success = ""
      },
      complete: () => {
        this.success = "Данные о художнике успешно удалены"
        console.log(`Done deleting painter with id = ${this.painter.data.id}`)
      }
    })
  }

  onDeletePainterButtonClick(): void {
    this.onDeletePainter()
  }
}
