import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdashComponent } from './tdash.component';

describe('TdashComponent', () => {
  let component: TdashComponent;
  let fixture: ComponentFixture<TdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
