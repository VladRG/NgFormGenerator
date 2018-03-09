import { Component, Injector, Input, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { DateTimeModel } from '../../../models';
import { NgbTimepickerConfig, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vg-form-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class VgDatetimeComponent implements DoCheck {
  constructor(private injector: Injector, config: NgbTimepickerConfig, private changeDetector: ChangeDetectorRef) {
    this.model = injector.get('model');
    config.spinners = false;

    this.date = {
      year: this.model.value ? this.model.value.getFullYear() : 0,
      month: this.model.value ? this.model.value.getMonth() : 0,
      day: this.model.value ? this.model.value.getDate() : 0
    };

    this.time = {
      hour: this.model.value ? this.model.value.getHours() : 0,
      minute: this.model.value ? this.model.value.getMinutes() : 0,
      second: 0
    };
  }

  @Input()
  model: DateTimeModel;

  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  date: NgbDateStruct;

  ngDoCheck() {
    if (
      this.date.year !== (this.model.value ? this.model.value.getFullYear() : 0) ||
      this.date.month !== (this.model.value ? this.model.value.getMonth() : 0) ||
      this.date.day !== (this.model.value ? this.model.value.getDate() : 0)
    ) {
      this.changeDetector.markForCheck();
      this.model.value = new Date(
        this.date.year,
        this.date.month,
        this.date.day,
        this.time.hour,
        this.time.minute
      );
    }

    if (
      this.time.hour !== (this.model.value ? this.model.value.getHours() : 0) ||
      this.time.minute !== (this.model.value ? this.model.value.getMinutes() : 0)
    ) {
      if (this.model.value) {
        this.model.value = new Date(
          this.model.value.getFullYear(),
          this.model.value.getMonth(),
          this.model.value.getDate(),
          this.time.hour,
          this.time.minute
        );
      } else {
        const now = new Date();
        this.model.value = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          this.time.hour,
          this.time.minute
        );
      }
    }
  }
}
