import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulrioComponent } from './formulrio.component';

describe('FormulrioComponent', () => {
  let component: FormulrioComponent;
  let fixture: ComponentFixture<FormulrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulrioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
