import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingPageService } from '../service/landing-page.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let landingPageService: LandingPageService;


  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ LandingPageComponent ]
  //   })
  //   .compileComponents();
  //   fixture = TestBed.createComponent(LandingPageComponent);
  //   component = fixture.componentInstance;
  //   landingPageService = TestBed.inject(LandingPageService);
  // });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        LandingPageComponent
      ],
      providers : [
        LandingPageService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
