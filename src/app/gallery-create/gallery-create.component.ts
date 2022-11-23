import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import { Gallery } from '../interface/gallery';

@Component({
  selector: 'app-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.css']
})
export class GalleryCreateComponent implements OnInit {
  gallery: Gallery = { "name":"", "location":"", "link":"" }
  error: any
  success: any

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  onCreateGallery(): void {
    this.gallery.name = (<HTMLInputElement>document.getElementById('name')).value
    this.gallery.location = (<HTMLInputElement>document.getElementById('location')).value
    this.gallery.link = (<HTMLInputElement>document.getElementById('link')).value
    
    this.galleryService.createGallery(this.gallery).subscribe({
      next: (responce: any) => {
        this.gallery = responce
        console.log(JSON.stringify(responce))
        this.error = ""
      },
      error: (error: any) => {
        this.error = error
        console.error(error)
        //this.gallery = ""
        this.success = ""
      },
      complete: () => {
        this.success = "Галерея успешно создана"
        console.log("Done creating gallery")
        this.error = ""
      }
    });
  }

}
