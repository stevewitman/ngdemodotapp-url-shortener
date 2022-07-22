import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarExternalComponent } from './toolbar-external.component';

describe('ToolbarExternalComponent', () => {
  let component: ToolbarExternalComponent;
  let fixture: ComponentFixture<ToolbarExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarExternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
