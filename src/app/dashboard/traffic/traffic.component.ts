import { Component } from '@angular/core';
import { DUMMY_TRAFFIC_DATA } from '../../dummy_traffic_data';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
