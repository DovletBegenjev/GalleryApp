import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery-patch',
  templateUrl: './gallery-patch.component.html',
  styleUrls: ['./gallery-patch.component.css']
})
export class GalleryPatchComponent implements OnInit {
  galleries: any = []
  gallery: any
  error: any
  success: any
  id: any

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
    this.id = (<HTMLInputElement>document.getElementById('galleryID')).value
    this.galleryService.getGallery(Number(this.id)).subscribe({
      next: (responce: any) => {
        this.gallery = responce
        console.log(JSON.stringify(responce))
        this.error = "";

        (<HTMLInputElement>document.getElementById('name')).value = this.gallery.data.name;
        (<HTMLInputElement>document.getElementById('location')).value = this.gallery.data.location;
        (<HTMLInputElement>document.getElementById('link')).value = this.gallery.data.link;
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.gallery = ""
        this.success = ""
      },
      complete: () => {
        //this.success = `Done getting gallery with id = ${this.gallery.data.id}`
        console.log(`Done getting gallery with id = ${this.gallery.data.id}`)
        this.error = ""
      }
    });
  }

  onPatchGallery(): void {
    this.gallery.data.name = (<HTMLInputElement>document.getElementById('name')).value
    this.gallery.data.location = (<HTMLInputElement>document.getElementById('location')).value
    this.gallery.data.link = (<HTMLInputElement>document.getElementById('link')).value
    
    this.galleryService.patchGallery(this.gallery.data).subscribe({
      next: (responce: any) => {
        this.gallery = responce
        console.log(JSON.stringify(responce))
        this.error = "";
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        this.gallery = ""
        this.success = ""
      },
      complete: () => {
        this.success = "Данные успешно обновлены"
        console.log("Done patching gallery")
        this.error = ""
      }
    });
  }

}
