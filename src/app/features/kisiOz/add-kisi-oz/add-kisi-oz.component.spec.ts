import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKisiOzComponent } from './add-kisi-oz.component';

describe('AddKisiOzComponent', () => {
  let component: AddKisiOzComponent;
  let fixture: ComponentFixture<AddKisiOzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddKisiOzComponent]
    });
    fixture = TestBed.createComponent(AddKisiOzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
