import { Component, Injector, Input, ChangeDetectorRef, DoCheck, OnChanges } from '@angular/core';
import { DateModel } from '../../../models';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vg-form-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.html']
})

export class VgDateComponent implements DoCheck {
  constructor(private injector: Injector, private changeDetector: ChangeDetectorRef) {
    this.model = injector.get('model');
    this.date = {
      year: this.model.value ? this.model.value.getFullYear() : 0,
      month: this.model.value ? this.model.value.getMonth() : 0,
      day: this.model.value ? this.model.value.getDate() : 0
    };
  }

  @Input()
  model: DateModel;

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
        this.date.day
      );
    }
  }

}
