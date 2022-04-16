import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdgeciCoreUtilsComponent } from './adgeci-core-utils.component';

describe('AdgeciCoreUtilsComponent', () => {
  let component: AdgeciCoreUtilsComponent;
  let fixture: ComponentFixture<AdgeciCoreUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdgeciCoreUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdgeciCoreUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
