import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
