import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../core/movies.service";

@Component({
  selector: "app-movieslist",
  templateUrl: "./movieslist.component.html",
  styleUrls: ["./movieslist.component.css"]
})
export class MovieslistComponent implements OnInit {
  movies = [];
  page = 1;
  collectionSize: number;
  pageSize = 20;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    this.moviesService.getMovies(page).subscribe(
      data => {
        this.movies = data.results;
        this.collectionSize = data.total_results;
        this.page = data.page;
      },
      error => {
        // @Todo: Handle error in interceptor
        console.log(error);
      }
    );
  }

  search(event) {
    alert("Under constructions");
  }
}
