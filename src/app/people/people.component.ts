import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../core/people.service";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  people = [];
  page = 1;
  collectionSize: number;
  pageSize = 20;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    this.peopleService.getPeople(page).subscribe(
      data => {
        this.people = data.results;
        this.collectionSize = data.total_results;
        this.page = data.page;
      },
      error => {
        // @Todo: Handle/ Log error in interceptor and show Error message to user if something went wrong
        console.log(error);
      }
    );
  }
}
