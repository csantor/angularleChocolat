import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Leader } from '../shared/leader';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // leader: Leader;
  leaders: Leader[];

  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders);
  }
  //  goBack(): void {
  //   this.location.back();
  // }
}
