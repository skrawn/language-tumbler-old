import { Component, OnInit } from '@angular/core';

import { GoogleTranslateService } from './google-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'language-tumbler';
  readonly TRANSLATE_OPTIONS = [
    { lang: 'English', code: 'en' },
    { lang: 'Russian', code: 'ru' }
  ];
  public translateList;

  constructor(private gtService: GoogleTranslateService) {
  }

  ngOnInit() {
  }

}
