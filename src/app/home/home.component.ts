import { Component } from '@angular/core';
import { TrendingService } from '../services/trending.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TrendingService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public trendingMovies: any[] = [];
  public trendingShows: any[] = [];
  constructor(_TrendingService: TrendingService){
    _TrendingService.getTrending("all").subscribe((response) =>{
      this.trendingMovies = response.results.filter((trend: any) => trend.media_type === "movie");
      this.trendingShows = response.results.filter((trend: any) => trend.media_type === "tv");
    })
  }
}
