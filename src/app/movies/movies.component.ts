import { Component } from '@angular/core';
import { TrendingService } from '../services/trending.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TrendingService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  public trendingMovies: any[] = [];
  constructor(_TrendingService: TrendingService){
    _TrendingService.getTrending("all").subscribe((response) =>{
      this.trendingMovies = response.results.filter((trend: any) => trend.media_type === "movie");
    })
  }
}
