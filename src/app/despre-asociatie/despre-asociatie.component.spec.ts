import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreAsociatieComponent } from './despre-asociatie.component';

describe('DespreAsociatieComponent', () => {
  let component: DespreAsociatieComponent;
  let fixture: ComponentFixture<DespreAsociatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespreAsociatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespreAsociatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
