import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventorganiserNavbarComponent } from './eventorganiser-navbar.component';

describe('EventorganiserNavbarComponent', () => {
  let component: EventorganiserNavbarComponent;
  let fixture: ComponentFixture<EventorganiserNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventorganiserNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventorganiserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
