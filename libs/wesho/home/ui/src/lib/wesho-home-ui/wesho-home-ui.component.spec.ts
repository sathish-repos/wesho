import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeshoHomeUiComponent } from './wesho-home-ui.component';

describe('WeshoHomeUiComponent', () => {
  let component: WeshoHomeUiComponent;
  let fixture: ComponentFixture<WeshoHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeshoHomeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeshoHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
