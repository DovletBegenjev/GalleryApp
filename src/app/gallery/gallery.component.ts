import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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

  onGetGallery(): void {
    let id = (<HTMLInputElement>document.getElementById('galleryID')).value
    this.galleryService.getGallery(Number(id)).subscribe({
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

}
