import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisiOzListComponent } from './kisi-oz-list.component';

describe('KisiOzListComponent', () => {
  let component: KisiOzListComponent;
  let fixture: ComponentFixture<KisiOzListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KisiOzListComponent]
    });
    fixture = TestBed.createComponent(KisiOzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
