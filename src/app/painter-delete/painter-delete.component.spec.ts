import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterDeleteComponent } from './painter-delete.component';

describe('PainterDeleteComponent', () => {
  let component: PainterDeleteComponent;
  let fixture: ComponentFixture<PainterDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainterDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
