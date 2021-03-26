import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor (
    private http: HttpClient
  ) {}

  // Get all spaceX list items
  getAllSpacexItems() {
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100`);
  }

  // Get all spaceX Launch success filter items
  getAllSpacexLaunchSuccessItems() {
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true`);
  }

  // Get all matched Launch success and Launch landing filter items
  getAllSpacexLandingAndLaunchSuccessItems() {
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true`);
  }

   // Get all matched Launch success, Launch landing and 2014 year filter items
   getAllMatchedFilterItems() {
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014`);
  }
}
