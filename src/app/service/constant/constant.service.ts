import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  public static SERVER_URL:any = 'http://localhost:8000/';
  public static responseStatus:any = {
    success: 1,
    error: 0
  };
  constructor() { } 
}
 