import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../service/painting.service';
import { PainterService } from '../service/painter.service';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  painter: any
  gallery: any
  id: any

  paintings: any = []
  painting: any
  error: any
  success: any

  constructor(private paintingService: PaintingService, private painterService: PainterService, private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.onGetPaintings()
  }

  onGetPainter(id: number): void {
    this.painterService.getPainter(id).subscribe({
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
        this.success = "Done getting all painters"
        console.log(`Done getting painter with id = ${this.painter.data.id}`)
      }
    })
  }

  onGetGallery(id: number): void {
    this.galleryService.getGallery(id).subscribe({
      next: (responce: any) => {
        this.gallery = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.gallery = ""
        this.success = ""
      },
      complete: () => {
        this.success = `Done getting gallery with id = ${this.gallery.data.id}`
        console.log(`Done getting gallery with id = ${this.gallery.data.id}`)
        this.error = ""
      }
    });
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
        //this.succes = "Done getting all painters"
        console.log("Done getting all painters")
      }
    });
  }

  onGetPainting(): void {
    let id = (<HTMLInputElement>document.getElementById('paintingID')).value
    this.paintingService.getPainting(Number(id)).subscribe({
      next: (responce: any) => {
        this.painting = responce
        console.log(JSON.stringify(responce))
        this.error = ""

        if(this.painting.data.painter_id != null) {
          this.onGetPainter(this.painting.data.painter_id);
        } else {
          this.painter = ""
        }
        
        if(this.painting.data.gallery_id != null) {
          this.onGetGallery(this.painting.data.gallery_id);
        } else {
          this.gallery = ""
        }
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painting = ""
      },
      complete: () => {
        this.success = "Картина успешно загружена"
        console.log(`Done getting painter with id = ${id}`)
      }
    })
  }

  onShowPaintingButtonClick(): void {
    this.onGetPainting()
  }

}
