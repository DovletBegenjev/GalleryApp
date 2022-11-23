import { Component, OnInit } from '@angular/core';
import { PainterService } from '../service/painter.service'
import { Painter } from '../interface/painter';

@Component({
  selector: 'app-painter-patch',
  templateUrl: './painter-patch.component.html',
  styleUrls: ['./painter-patch.component.css']
})
export class PainterPatchComponent implements OnInit {
  painters: any = [];
  painter: any = ""
  error: any
  success: any
  id: any

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

  onGetPainter(): void {
    this.id = (<HTMLInputElement>document.getElementById('painterID')).value

    this.painterService.getPainter(Number(this.id)).subscribe({
      next: (responce: any) => {
        this.painter = responce
        console.log(JSON.stringify(responce))
        this.error = "";

        (<HTMLInputElement>document.getElementById('name')).value = this.painter.data.name;
        (<HTMLInputElement>document.getElementById('surname')).value = this.painter.data.surname; 
        (<HTMLInputElement>document.getElementById('birthDate')).value = this.painter.data.birthDate;
        (<HTMLInputElement>document.getElementById('placeOfBirth')).value = this.painter.data.placeOfBirth;
        (<HTMLInputElement>document.getElementById('genre')).value = this.painter.data.genre;
        (<HTMLInputElement>document.getElementById('style')).value = this.painter.data.style;
        (<HTMLInputElement>document.getElementById('picFileName')).value = this.painter.data.picFileName;
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painter = ""
        this.success = ""
      },
      complete: () => {
        //this.success = `Done getting painter with id = ${this.painter.data.id}`
        console.log(`Done getting painter with id = ${this.painter.data.id}`)
        this.error = ""
      }
    });
  }

  onPatchPainter(): void {
    this.painter.data.name = (<HTMLInputElement>document.getElementById('name')).value
    this.painter.data.surname = (<HTMLInputElement>document.getElementById('surname')).value
    this.painter.data.birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value
    this.painter.data.placeOfBirth = (<HTMLInputElement>document.getElementById('placeOfBirth')).value
    this.painter.data.genre = (<HTMLInputElement>document.getElementById('genre')).value
    this.painter.data.style = (<HTMLInputElement>document.getElementById('style')).value
    this.painter.data.picFileName = (<HTMLInputElement>document.getElementById('picFileName')).value
    
    this.painterService.patchPainter(this.painter.data).subscribe({
      next: (responce: any) => {
        this.painter = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        // this.painter = 
        this.success = ""
      },
      complete: () => {
        this.success = "Данные успешно обновлены"
        console.log("Done patching painter")
        this.error = ""
      }
    });
  }

}
