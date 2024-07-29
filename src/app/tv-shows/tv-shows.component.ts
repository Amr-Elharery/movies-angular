import { Component } from '@angular/core';
import { TrendingService } from '../services/trending.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [HttpClientModule],
  providers : [TrendingService],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss'
})
export class TvShowsComponent {
  public trendingShows: any[] = [];
  constructor(_TrendingService: TrendingService){
    _TrendingService.getTrending("all").subscribe((response) =>{
      this.trendingShows = response.results.filter((trend: any) => trend.media_type === "tv");
    })
  }
}
