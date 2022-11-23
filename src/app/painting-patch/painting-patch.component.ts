import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../service/painting.service';
import { PainterService } from '../service/painter.service';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-painting-patch',
  templateUrl: './painting-patch.component.html',
  styleUrls: ['./painting-patch.component.css']
})
export class PaintingPatchComponent implements OnInit {
  painters: any = []
  paintings: any = []
  galleries: any = []

  painting: any
  error: any
  success: any
  id: any

  constructor(private paintingService: PaintingService, private painterService: PainterService, private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.onGetPaintings();
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

  onGetPainting(): void {
    this.onGetPainters();
    this.onGetGalleries();

    this.id = (<HTMLInputElement>document.getElementById('paintingID')).value

    this.paintingService.getPainting(Number(this.id)).subscribe({
      next: (responce: any) => {
        this.painting = responce
        console.log(JSON.stringify(responce))
        this.error = "";

        (<HTMLInputElement>document.getElementById('nameOfPainting')).value = this.painting.data.nameOfPainting;
        (<HTMLInputElement>document.getElementById('yearOfPainting')).value = this.painting.data.yearOfPainting;
        (<HTMLInputElement>document.getElementById('painter_id')).value = this.painting.data.painter_id;
        (<HTMLInputElement>document.getElementById('gallery_id')).value = this.painting.data.gallery_id;
        (<HTMLInputElement>document.getElementById('art_form')).value = this.painting.data.art_form;
        (<HTMLInputElement>document.getElementById('plot')).value = this.painting.data.plot;
        (<HTMLInputElement>document.getElementById('style')).value = this.painting.data.style;
        (<HTMLInputElement>document.getElementById('technic')).value = this.painting.data.technic;
        (<HTMLInputElement>document.getElementById('materials')).value = this.painting.data.materials;
        (<HTMLInputElement>document.getElementById('size')).value = this.painting.data.size;
        (<HTMLInputElement>document.getElementById('linkToImage')).value = this.painting.data.linkToImage;
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painting = ""
        this.success = ""
      },
      complete: () => {
        //this.success = "Картина успешно загружена"
        console.log(`Done getting painting with id = ${this.id}`)
        this.error = ""
      }
    })
  }

  onPatchPainting(): void {
    this.painting.data.nameOfPainting = (<HTMLInputElement>document.getElementById('nameOfPainting')).value
    this.painting.data.yearOfPainting = (<HTMLInputElement>document.getElementById('yearOfPainting')).value
    this.painting.data.painter_id = Number((<HTMLInputElement>document.getElementById('painter_id')).value)
    this.painting.data.gallery_id = Number((<HTMLInputElement>document.getElementById('gallery_id')).value)
    this.painting.data.art_form = (<HTMLInputElement>document.getElementById('art_form')).value
    this.painting.data.plot = (<HTMLInputElement>document.getElementById('plot')).value
    this.painting.data.style = (<HTMLInputElement>document.getElementById('style')).value
    this.painting.data.technic = (<HTMLInputElement>document.getElementById('technic')).value
    this.painting.data.materials = (<HTMLInputElement>document.getElementById('materials')).value
    this.painting.data.size = (<HTMLInputElement>document.getElementById('size')).value
    this.painting.data.linkToImage = (<HTMLInputElement>document.getElementById('linkToImage')).value
    
    this.paintingService.patchPainting(this.painting.data).subscribe({
      next: (responce: any) => {
        this.painting = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.painting = ""
        this.success = ""
      },
      complete: () => {
        this.success = "Картина успешно обновлена"
        console.log("Done patching painting")
        this.error = ""
      }
    });
  }

}
