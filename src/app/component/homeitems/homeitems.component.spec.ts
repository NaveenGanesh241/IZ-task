import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeitemsComponent } from './homeitems.component';

describe('HomeitemsComponent', () => {
  let component: HomeitemsComponent;
  let fixture: ComponentFixture<HomeitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeitemsComponent]
    });
    fixture = TestBed.createComponent(HomeitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
