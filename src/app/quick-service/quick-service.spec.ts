import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickService } from './quick-service';

describe('QuickService', () => {
  let component: QuickService;
  let fixture: ComponentFixture<QuickService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickService],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
