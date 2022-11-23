import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit {
  galleries: any = [];
  error: any
  succes: any

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
        this.succes = ""
      },
      complete: () => {
        this.succes = "Done getting all galleries"
        console.log("Done getting all galleries")
        this.error = ""
      }
    });
  }

}
