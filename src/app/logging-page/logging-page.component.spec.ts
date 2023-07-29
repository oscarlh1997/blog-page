import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingPageComponent } from './logging-page.component';

describe('LoggingPageComponent', () => {
  let component: LoggingPageComponent;
  let fixture: ComponentFixture<LoggingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggingPageComponent]
    });
    fixture = TestBed.createComponent(LoggingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
