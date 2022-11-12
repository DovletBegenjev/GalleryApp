import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../service/painting.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {
  paintings: any = []
  painting!: any
  error: string = ""
  succes: string = ""

  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.onGetPaintings()
  }

  onGetPaintings(): void {
    this.paintingService.getPaintings().subscribe({
      next: (responce: any) => {
        this.paintings = responce
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

  onGetPainting(): void {
    this.paintingService.getPainting().subscribe({
      next: (responce: any) => {
        this.painting = responce
        console.log(JSON.stringify(responce))
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
      },
      complete: () => {
        this.succes = "Done getting all painters"
        console.log(`Done getting painter with id = ${this.painting.data.id}`)
      }
    })
  }
}
