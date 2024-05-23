import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shift } from './shift.model';
import { ScheduleEntry } from './schedule-entry.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private scheduleSubject = new BehaviorSubject<ScheduleEntry[]>([]);
  schedule$ = this.scheduleSubject.asObservable();

  updateSchedule(schedule: ScheduleEntry[]) {
    this.scheduleSubject.next(schedule);
  }

  scheduleBreaks(shifts: Shift[]): ScheduleEntry[] {
    const scheduledBreaks: ScheduleEntry[] = [];

    for (const shift of shifts) {
      const start = this.convertTimeStringToMinutes(shift.startTime);
      const end = this.convertTimeStringToMinutes(shift.endTime);
      const duration = end - start;

      if (duration >= 240) {
        scheduledBreaks.push({
          name: shift.name,
          breakStart: this.convertMinutesToTimeString(start + 120),
          breakEnd: this.convertMinutesToTimeString(start + 135)
        });
      }

      if (duration >= 480) {
        scheduledBreaks.push({
          name: shift.name,
          breakStart: this.convertMinutesToTimeString(start + 240),
          breakEnd: this.convertMinutesToTimeString(start + 270)
        });
        scheduledBreaks.push({
          name: shift.name,
          breakStart: this.convertMinutesToTimeString(start + 360),
          breakEnd: this.convertMinutesToTimeString(start + 375)
        });
      }
    }

    return scheduledBreaks;
  }

  private convertTimeStringToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  private convertMinutesToTimeString(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${this.padNumber(hours)}:${this.padNumber(mins)}`;
  }

  private padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
