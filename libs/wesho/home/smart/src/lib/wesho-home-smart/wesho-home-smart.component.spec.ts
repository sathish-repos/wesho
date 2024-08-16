import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeshoHomeSmartComponent } from './wesho-home-smart.component';

describe('WeshoHomeSmartComponent', () => {
  let component: WeshoHomeSmartComponent;
  let fixture: ComponentFixture<WeshoHomeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeshoHomeSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeshoHomeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
