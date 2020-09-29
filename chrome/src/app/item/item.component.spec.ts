import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemComponent } from './item.component';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ItemComponent
      ],
    }).compileComponents();
  });
  it('should create the item component', () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const item = fixture.componentInstance;
    expect(item).toBeTruthy();
  });
});
