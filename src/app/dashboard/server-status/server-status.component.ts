import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: | 'online' | 'offline' | 'unknown' = 'online';
  private intervel?: ReturnType<typeof setInterval>;
  constructor() { }

  ngOnInit() {
    console.log('NG ON INIT');
    this.intervel = setInterval(() => {
      const rand = this.getRandom(1, 3);
      if (rand === 1) {
        this.currentStatus = 'online'
      } else if (rand === 2) {
        this.currentStatus = 'offline'
      } else if (rand === 3) {
        this.currentStatus = 'unknown'
      }
    }, 5000)
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervel);
    console.log('NG ON DESTROY');
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
