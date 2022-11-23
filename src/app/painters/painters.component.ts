import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.css']
})
export class PaintersComponent implements OnInit {
  painters: any = [];
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

  onShowAllPaintersButtonClick(): void {
    this.onGetPainters()
  }

}
