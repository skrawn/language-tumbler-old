import { Component, OnInit } from '@angular/core';
// import { Translate } from '@google-cloud/translate';

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

  // private translate = new Translate({
  //   projectId: 'languagetumbler'
  // });


  constructor() {
  }

  ngOnInit() {
  }

}
