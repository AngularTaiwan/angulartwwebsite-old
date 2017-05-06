import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'augt-activity-maintain',
  templateUrl: './activity-maintain.component.html',
  styleUrls: ['./activity-maintain.component.scss']
})
export class ActivityMaintainComponent implements OnInit {
  isEdit: boolean = false;
  constructor() {}
  ngOnInit() {}
}
