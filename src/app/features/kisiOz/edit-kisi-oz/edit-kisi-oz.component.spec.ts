import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKisiOzComponent } from './edit-kisi-oz.component';

describe('EditKisiOzComponent', () => {
  let component: EditKisiOzComponent;
  let fixture: ComponentFixture<EditKisiOzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditKisiOzComponent]
    });
    fixture = TestBed.createComponent(EditKisiOzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
