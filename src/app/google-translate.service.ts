import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest , HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {
  readonly TRANSLATE_API_PATH = 'https://translation.googleapis.com/language/translate/v2';

  constructor(public http: HttpClient ) { }

  
}
