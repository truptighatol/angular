import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "../core/people.service";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"]
})
export class PersonDetailsComponent implements OnInit {
  id: number;
  person;
  name;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    // Read URL Paramter
    this.route.params.subscribe(parameters => {
      // Get Person Details
      this.peopleService.getPersonDetails(parameters["id"]).subscribe(
        data => {
          this.person = data;
        },
        error => {
          // @Todo handle error and show the appropriate error to user in case of failure
          console.log(error);
        }
      );
    });
  }
}
