import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMessageComponent } from './sign-up-message.component';

describe('SignUpMessageComponent', () => {
  let component: SignUpMessageComponent;
  let fixture: ComponentFixture<SignUpMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
