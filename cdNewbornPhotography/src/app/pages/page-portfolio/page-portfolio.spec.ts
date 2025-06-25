import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolio } from './page-portfolio';

describe('PagePortfolio', () => {
  let component: PagePortfolio;
  let fixture: ComponentFixture<PagePortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
