import { Component, OnInit } from '@angular/core';
import { Painting } from '../interface/painting';
import { PaintingService } from '../service/painting.service';
import { PainterService } from '../service/painter.service';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-painting-create',
  templateUrl: './painting-create.component.html',
  styleUrls: ['./painting-create.component.css']
})
export class PaintingCreateComponent implements OnInit {
  painters: any = []
  galleries: any = []
  id: any

  painting: Painting = { "nameOfPainting": "", "yearOfPainting": "", "linkToImage": "", "painter_id": 0, "gallery_id": 0, "art_form": "", 
    "plot": "", "style": "", "technic": "", "materials": "", "size": "" }
  error: any
  success: any

  constructor(private paintingService: PaintingService, private painterService: PainterService, private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.onGetPainters();
    this.onGetGalleries();
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

  onGetGalleries(): void {
    this.galleryService.getGalleries().subscribe({
      next: (responce: any) => {
        this.galleries = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.galleries = []
        this.success = ""
      },
      complete: () => {
        //this.success = "Done getting all galleries"
        console.log("Done getting all galleries")
        this.error = ""
      }
    });
  }

  onCreatePainting(): void {
    this.painting.nameOfPainting = (<HTMLInputElement>document.getElementById('nameOfPainting')).value
    this.painting.yearOfPainting = (<HTMLInputElement>document.getElementById('yearOfPainting')).value
    this.painting.painter_id = Number((<HTMLInputElement>document.getElementById('painter_id')).value)
    this.painting.gallery_id = Number((<HTMLInputElement>document.getElementById('gallery_id')).value)
    this.painting.art_form = (<HTMLInputElement>document.getElementById('art_form')).value
    this.painting.plot = (<HTMLInputElement>document.getElementById('plot')).value
    this.painting.style = (<HTMLInputElement>document.getElementById('style')).value
    this.painting.technic = (<HTMLInputElement>document.getElementById('technic')).value
    this.painting.materials = (<HTMLInputElement>document.getElementById('materials')).value
    this.painting.size = (<HTMLInputElement>document.getElementById('size')).value
    this.painting.linkToImage = (<HTMLInputElement>document.getElementById('linkToImage')).value
    
    this.paintingService.createPainting(this.painting).subscribe({
      next: (responce: any) => {
        this.painting = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        // this.painting = 
        this.success = ""
      },
      complete: () => {
        this.success = "Картина успешно создана"
        console.log("Done creating painting")
        this.error = ""
      }
    });
  }

}
