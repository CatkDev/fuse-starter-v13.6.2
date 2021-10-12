import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFormComponent } from './flex-form.component';

describe('FlexFormComponent', () => {
  let component: FlexFormComponent;
  let fixture: ComponentFixture<FlexFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
