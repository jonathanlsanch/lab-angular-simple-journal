import { Component, OnInit, Input } from '@angular/core';
import { JournalService } from './../journal.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalService]
})
export class SingleEntryComponent implements OnInit {
  journal: any;
  constructor(private route: ActivatedRoute, private router: Router, private journalService: JournalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }

  getJournalDetails(id) {
    this.journalService.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }

}
