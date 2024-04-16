import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipularClienteComponent } from './manipular-cliente.component';

describe('ManipularClienteComponent', () => {
  let component: ManipularClienteComponent;
  let fixture: ComponentFixture<ManipularClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManipularClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManipularClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
