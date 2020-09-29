import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ALERT_STATUS } from './notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private toastr: ToastrService){
  }

  public alert(message: string, alertStatus: ALERT_STATUS): void{
    switch (alertStatus) {
      case ALERT_STATUS.ERROR:
        this.toastr.error(message, 'Error');
        break;
      case ALERT_STATUS.WARN:
        this.toastr.warning(message, 'Warning');
        break;
      case ALERT_STATUS.SUCCESS:
        this.toastr.success(message, 'Success');
        break;
    }
  }
}
