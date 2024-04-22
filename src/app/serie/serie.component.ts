import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  constructor( private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe( series => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  calculateAverageSeasons(): void {
    let totalSeasons = 0;
    for (let serie of this.series) {
      totalSeasons += serie.seasons;
    }
    this.averageSeasons = totalSeasons / this.series.length;
  }
}
