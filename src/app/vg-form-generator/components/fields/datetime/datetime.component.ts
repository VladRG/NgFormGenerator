import { Component, Injector, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { DateTimeModel } from '../../../models';
import { NgbTimepickerConfig, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vg-form-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.html']
})

export class VgDatetimeComponent implements OnChanges, DoCheck {
  constructor(private injector: Injector, config: NgbTimepickerConfig) {
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

  ngOnChanges(changes: SimpleChanges) {
    this.model.value = new Date(
      this.model.value.getFullYear(),
      this.model.value.getMonth(),
      this.model.value.getDate(),
      changes.time.currentValue.hour,
      changes.time.currentValue.minute,
      0
    );
    console.log(this.model.value);
  }

  ngDoCheck() {
    // this.model.value = new Date(
    //   this.date.year,
    //   this.date.month,
    //   this.date.day,
    //   this.time.hour,
    //   this.time.minute
    // );
  }
}
