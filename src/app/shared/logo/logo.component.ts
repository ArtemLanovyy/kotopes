import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LogoComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() logoColor: string;
  @Input() textColor: string;

  constructor() { }

  ngOnInit() {
  }

}
