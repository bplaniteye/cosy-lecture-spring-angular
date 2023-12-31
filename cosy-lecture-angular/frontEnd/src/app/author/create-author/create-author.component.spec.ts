import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorComponent } from './create-author.component';

describe('createAuthorComponent', () => {
  let component: CreateAuthorComponent;
  let fixture: ComponentFixture<CreateAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAuthorComponent]
    });
    fixture = TestBed.createComponent(CreateAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
