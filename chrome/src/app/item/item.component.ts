import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../notification/notification.service';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  processing = false;
  itemForm;

  constructor(private fb: FormBuilder,
              private itemService: ItemService,
              private notificationService: NotificationService){
    this.itemForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): any{
    return this.itemForm.controls;
  }
}
