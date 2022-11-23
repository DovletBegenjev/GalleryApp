import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPatchComponent } from './gallery-patch.component';

describe('GalleryPatchComponent', () => {
  let component: GalleryPatchComponent;
  let fixture: ComponentFixture<GalleryPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
