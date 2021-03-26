import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { LandingPageService } from './landing-page.service';

describe('LandingPageService', () => {
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LandingPageService]
    });
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve all spacex data from the API bia GET', () => {
    service.getAllSpacexItems().subscribe(function(spacexData:any) {
        expect(spacexData.length).toBe(100);
    });
  });

  it('should retrive all launch success mactched filter items', () => {
    service.getAllSpacexLaunchSuccessItems().subscribe(function(spacexData:any) {
        expect(spacexData.length).toBe(100);
    });
  });

  it('should retrive all launch success and landing launch mactched filter items', () => {
    service.getAllSpacexLandingAndLaunchSuccessItems().subscribe(function(spacexData:any) {
        expect(spacexData.length).toBe(100);
    });
  });

  it('should retrive all mactched filter items', () => {
    service.getAllMatchedFilterItems().subscribe(function(spacexData:any) {
        expect(spacexData.length).toBe(100);
    });
  });

});
