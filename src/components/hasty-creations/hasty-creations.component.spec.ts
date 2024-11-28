import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HastyCreationsComponent } from './hasty-creations.component';

describe('HastyCreationsComponent', () => {
  let component: HastyCreationsComponent;
  let fixture: ComponentFixture<HastyCreationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HastyCreationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HastyCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
