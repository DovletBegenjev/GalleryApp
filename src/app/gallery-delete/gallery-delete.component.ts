import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery-delete',
  templateUrl: './gallery-delete.component.html',
  styleUrls: ['./gallery-delete.component.css']
})
export class GalleryDeleteComponent implements OnInit {
  galleries: any = []
  gallery: any
  error: any
  success: any

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.onGetGalleries()
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

  onDeleteGallery(): void {
    let id = (<HTMLInputElement>document.getElementById('galleryID')).value
    this.galleryService.deleteGallery(Number(id)).subscribe({
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
        this.success = "Данные о галерее успешно удалены"
        console.log(`Done deleting gallery with id = ${this.gallery.data.id}`)
      }
    })
  }

}
