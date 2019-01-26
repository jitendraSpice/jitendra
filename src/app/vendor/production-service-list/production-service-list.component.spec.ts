import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionServiceListComponent } from './production-service-list.component';

describe('ProductionServiceListComponent', () => {
  let component: ProductionServiceListComponent;
  let fixture: ComponentFixture<ProductionServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
