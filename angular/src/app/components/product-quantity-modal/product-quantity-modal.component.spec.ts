import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityModalComponent } from './product-quantity-modal.component';

describe('ProductQuantityModalComponent', () => {
  let component: ProductQuantityModalComponent;
  let fixture: ComponentFixture<ProductQuantityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQuantityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
