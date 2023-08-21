import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacontrolComponent } from './datacontrol.component';

describe('DatacontrolComponent', () => {
  let component: DatacontrolComponent;
  let fixture: ComponentFixture<DatacontrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatacontrolComponent]
    });
    fixture = TestBed.createComponent(DatacontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
