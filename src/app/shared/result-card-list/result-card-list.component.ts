import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card-list',
  templateUrl: './result-card-list.component.html',
  styleUrls: ['./result-card-list.component.scss']
})
export class ResultCardListComponent implements OnInit {
  public date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
