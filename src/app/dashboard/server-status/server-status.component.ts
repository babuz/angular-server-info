import { AfterViewInit, Component, inject, DestroyRef, OnInit, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      //this will get invoked whenever any changes happened to this field since its signal
      console.log(this.currentStatus())
    })
  }

  ngOnInit() {
    console.log('NG ON INIT');
    const intervel = setInterval(() => {
      const rand = this.getRandom(1, 3);
      if (rand === 1) {
        this.currentStatus.set('online')
      } else if (rand === 2) {
        this.currentStatus.set('offline')
      } else if (rand === 3) {
        this.currentStatus.set('unknown')
      }
    }, 5000)

    this.destroyRef.onDestroy(() => {
      console.log('destroy of setinterval called here');
      clearTimeout(intervel);
    });
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT');
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
