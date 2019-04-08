import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number;
  @Input() updatable = false;
  public rangeMin = 0;
  public rangeMax = 100;

  ngOnInit() {
    this.setProgressInRange();
  }

  private setProgressInRange() {
    if (this.progress < this.rangeMin) {
      this.progress = this.rangeMin;
    }
    if (this.progress > this.rangeMax) {
      this.progress = this.rangeMax;
    }
  }
}
