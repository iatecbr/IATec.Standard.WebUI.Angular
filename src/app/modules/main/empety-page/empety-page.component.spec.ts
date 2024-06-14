import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpetyPageComponent } from './empety-page.component';

describe('EmpetyPageComponent', () => {
  let component: EmpetyPageComponent;
  let fixture: ComponentFixture<EmpetyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpetyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpetyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
