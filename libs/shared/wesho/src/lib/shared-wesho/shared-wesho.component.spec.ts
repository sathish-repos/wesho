import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedWeshoComponent } from './shared-wesho.component';

describe('SharedWeshoComponent', () => {
  let component: SharedWeshoComponent;
  let fixture: ComponentFixture<SharedWeshoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedWeshoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedWeshoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
