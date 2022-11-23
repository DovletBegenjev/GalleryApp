import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingPatchComponent } from './painting-patch.component';

describe('PaintingPatchComponent', () => {
  let component: PaintingPatchComponent;
  let fixture: ComponentFixture<PaintingPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingPatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
