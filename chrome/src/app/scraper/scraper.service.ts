import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/User';
import { TokenResponse } from './token-response';
import { map } from 'rxjs/operators';
import { ServerContentResponse } from '../util/server-content-response';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {
}
