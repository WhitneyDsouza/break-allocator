import { Component, ViewChild } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { ScheduleDisplayComponent } from '../schedule-display/schedule-display.component';
import { Shift } from '../shift.model';  // Import the Shift interface
import { ScheduleEntry } from '../schedule-entry.model';  // Import the ScheduleEntry interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift-input',
  templateUrl: './shift-input.component.html',
  styleUrls: ['./shift-input.component.css']
})
export class ShiftInputComponent {
  @ViewChild(ScheduleDisplayComponent) scheduleDisplay!: ScheduleDisplayComponent;
  shifts: Shift[] = [{ name: 'Alice', startTime: '09:00', endTime: '13:00' },
  { name: 'Bob', startTime: '13:00', endTime: '17:00' },
  { name: 'Charlie', startTime: '10:00', endTime: '18:00' }];  // Use the Shift type
  schedule: ScheduleEntry[] = [];

  constructor(private scheduleService: ScheduleService,
    private router: Router) {}

  addShift() {
    this.shifts.push({ name: '', startTime: '', endTime: '' });
  }

  onSubmit() {
    const scheduledBreaks = this.scheduleService.scheduleBreaks(this.shifts);
    this.schedule = scheduledBreaks;
    this.scheduleService.updateSchedule(this.schedule);
  }
}
