import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Leader } from '../shared/leader';
import { Location } from '@angular/common';
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leader: Leader;
  leaders = LEADERS;

  constructor(private leaderservice: LeaderService, 
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit(): void {
   }
   goBack(): void {
    this.location.back();
  }
}
