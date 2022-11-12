import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'
import { Painter } from '../interface/painter'

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.css']
})
export class PaintersComponent implements OnInit {
  painters: Painter[] = [];
  painter!: Painter
  error: string = ""
  succes: string = ""

  constructor(private painterService: PainterService) { }

  ngOnInit(): void {
    this.onGetPainters()
  }

  onGetPainters(): void {
    this.painterService.getPainters().subscribe(
      (responce: Painter[]) => this.painters = responce,
      (error: any) => console.error(error),
      //() => this.succes = "Done getting all painters"
      () => console.log("Done getting all painters")
    );
  }

  onGetPainter(): void {
    this.painterService.getPainter().subscribe(
      (responce: Painter) => this.painter = responce,
      //(error: any) => this.error = error,
      (error: any) => console.error(error),
      () => console.log("Done getting all painters")
      //() => this.succes = `Done getting painter with id = ${this.painters[0].id}`
    )
  }

  onShowAllPaintersButtonClick(): void {
    this.onGetPainters()
  }

}
