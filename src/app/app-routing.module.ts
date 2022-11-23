import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaintersComponent } from './painters/painters.component';
import { PainterComponent } from './painter/painter.component';
import { PainterCreateComponent } from './painter-create/painter-create.component';
import { PainterPatchComponent } from './painter-patch/painter-patch.component';
import { PainterDeleteComponent } from './painter-delete/painter-delete.component';

import { PaintingsComponent } from './paintings/paintings.component';
import { PaintingComponent } from './painting/painting.component';
import { PaintingCreateComponent } from './painting-create/painting-create.component';
import { PaintingPatchComponent } from './painting-patch/painting-patch.component';
import { PaintingDeleteComponent } from './painting-delete/painting-delete.component';

import { GalleriesComponent } from './galleries/galleries.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';
import { GalleryPatchComponent } from './gallery-patch/gallery-patch.component';
import { GalleryDeleteComponent } from './gallery-delete/gallery-delete.component';

const routes: Routes = [
  { path: 'painters', component: PaintersComponent },
  { path: 'painter', component:  PainterComponent},
  { path: 'painter/create', component:  PainterCreateComponent},
  { path: 'painter/patch', component:  PainterPatchComponent},
  { path: 'painter/delete', component:  PainterDeleteComponent},

  { path: 'paintings', component:  PaintingsComponent},
  { path: 'painting', component:  PaintingComponent},
  { path: 'painting/create', component:  PaintingCreateComponent},
  { path: 'painting/patch', component:  PaintingPatchComponent},
  { path: 'painting/delete', component:  PaintingDeleteComponent},

  { path: 'galleries', component:  GalleriesComponent},
  { path: 'gallery', component:  GalleryComponent},
  { path: 'gallery/create', component:  GalleryCreateComponent},
  { path: 'gallery/patch', component:  GalleryPatchComponent},
  { path: 'gallery/delete', component:  GalleryDeleteComponent},

  { path: '', redirectTo: '/painters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
