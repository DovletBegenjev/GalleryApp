import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintersComponent } from './painters/painters.component';

import { HttpClientModule } from '@angular/common/http';
import { PaintingsComponent } from './paintings/paintings.component';
import { PainterComponent } from './painter/painter.component';
import { PaintingComponent } from './painting/painting.component';
import { PainterCreateComponent } from './painter-create/painter-create.component';
import { PainterPatchComponent } from './painter-patch/painter-patch.component';
import { PainterDeleteComponent } from './painter-delete/painter-delete.component';
import { PaintingCreateComponent } from './painting-create/painting-create.component';
import { PaintingDeleteComponent } from './painting-delete/painting-delete.component';
import { PaintingPatchComponent } from './painting-patch/painting-patch.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';
import { GalleryPatchComponent } from './gallery-patch/gallery-patch.component';
import { GalleryDeleteComponent } from './gallery-delete/gallery-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PaintersComponent,
    PaintingsComponent,
    PainterComponent,
    PaintingComponent,
    PainterCreateComponent,
    PainterPatchComponent,
    PainterDeleteComponent,
    PaintingCreateComponent,
    PaintingDeleteComponent,
    PaintingPatchComponent,
    GalleriesComponent,
    GalleryComponent,
    GalleryCreateComponent,
    GalleryPatchComponent,
    GalleryDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
