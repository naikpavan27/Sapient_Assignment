import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../service/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  spacexListItems: any = [];
  loading:boolean = false;

  // Years list
  yearsList:Array<number> = [];

  constructor(private landingPageService: LandingPageService) {}

  ngOnInit(): void {

    // Load all SpaceX list items at start
    this.getAllSpacexListItems();
    this.yearsList = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  }

  // Get all spaceX list items
  getAllSpacexListItems(){
    this.loading = true;
    this.landingPageService.getAllSpacexItems().subscribe(data => {
      this.spacexListItems = data;
      this.spacexListItems.forEach(function(spacexItem:any) {
        // I am adding launch_landing property in Data because we don't have this property
        spacexItem.launch_landing = true;
      });
      this.loading = false;
    });
  }

  // Get all spaceX Launch success filter items
  getAllSpacexLaunchSuccessItems() {
    this.loading = true;
    this.landingPageService.getAllSpacexLaunchSuccessItems().subscribe(data => {
      this.spacexListItems = data;
      this.spacexListItems.forEach(function(spacexItem:any) {
        // I am adding launch_landing property in Data because we don't have this property
        spacexItem.launch_landing = true;
      });
      this.spacexListItems = this.spacexListItems.filter(function(spacexItem:any) {
        return spacexItem.launch_success === true;
      });
      this.loading = false;
    });
  }

  // Get all matched Launch success and Launch landing filter items
  getAllSpacexLandingAndLaunchSuccessItems() {
    this.loading = true;
    this.landingPageService.getAllSpacexLandingAndLaunchSuccessItems().subscribe(data => {
      this.spacexListItems = data;
      this.spacexListItems.forEach(function(spacexItem:any) {
        // I am adding launch_landing property in Data because we don't have this property
        spacexItem.launch_landing = true;
      });
      this.spacexListItems = this.spacexListItems.filter(function(spacexItem:any) {
        return spacexItem.launch_success === true && spacexItem.launch_landing === true;
      });
      this.loading = false;
    });
  }

  // Get all matched Launch success, Launch landing and 2014 year filter items
  getAllMatchedFilterItems() {
    this.loading = true;
    this.landingPageService.getAllMatchedFilterItems().subscribe(data => {
      this.spacexListItems = data;
      this.spacexListItems.forEach(function(spacexItem:any) {
        // I am adding launch_landing property in Data because we don't have this property
        spacexItem.launch_landing = true;
      });
      this.spacexListItems = this.spacexListItems.filter(function(spacexItem:any) {
        return spacexItem.launch_success === true && spacexItem.launch_landing === true && spacexItem.launch_year == 2014;
      });
      this.loading = false;
    });
  }
}
