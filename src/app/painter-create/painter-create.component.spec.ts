import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterCreateComponent } from './painter-create.component';

describe('PainterCreateComponent', () => {
  let component: PainterCreateComponent;
  let fixture: ComponentFixture<PainterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainterCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
