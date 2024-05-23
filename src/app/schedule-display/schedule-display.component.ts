import { Component, Input } from '@angular/core';
import { ScheduleEntry } from '../schedule-entry.model';

@Component({
  selector: 'app-schedule-display',
  templateUrl: './schedule-display.component.html',
  styleUrls: ['./schedule-display.component.css']
})
export class ScheduleDisplayComponent {
  @Input() schedule: ScheduleEntry[] = [];

  getGroupedBreaks() {
    const groupedBreaks: { [key: string]: ScheduleEntry[] } = {};

    this.schedule.forEach(entry => {
      if (!groupedBreaks[entry.name]) {
        groupedBreaks[entry.name] = [];
      }
      groupedBreaks[entry.name].push(entry);
    });

    return Object.keys(groupedBreaks).map(name => ({
      name,
      breaks: groupedBreaks[name]
    }));
  }
}
