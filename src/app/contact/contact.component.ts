import { Component, OnInit, Inject } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbacks: Feedback[];

  constructor(private feedBackService: FeedbackService,
    @Inject('BaseURL') public  BaseURL) { }

  ngOnInit() {
    this.feedBackService.getFeedbacks().subscribe(feedbacks => this.feedbacks = feedbacks);
  }

}
