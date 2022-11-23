import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterPatchComponent } from './painter-patch.component';

describe('PainterPatchComponent', () => {
  let component: PainterPatchComponent;
  let fixture: ComponentFixture<PainterPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainterPatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainterPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
