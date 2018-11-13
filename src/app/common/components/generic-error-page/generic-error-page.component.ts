import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-error-page',
  templateUrl: './generic-error-page.component.html',
  styleUrls: ['./generic-error-page.component.css']
})
export class GenericErrorPageComponent implements OnInit {

  code: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe(parameters => {
        this.code = parameters['code'];
      });
  }

  ngOnInit() {
  }

}
