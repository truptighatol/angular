import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../core/movies.service";

@Component({
  selector: "app-moviedetails",
  templateUrl: "./moviedetails.component.html",
  styleUrls: ["./moviedetails.component.css"]
})
export class MoviedetailsComponent implements OnInit {
  movieData;
  name;

  constructor(
    private route: ActivatedRoute,
    private movieServiceObj: MoviesService
  ) {}

  ngOnInit() {
    // Read URL Paramter
    this.route.params.subscribe(parameters => {
      // Get Movie Details
      this.movieServiceObj.getMovieDetails(parameters["id"]).subscribe(
        data => {
          this.movieData = data;
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
