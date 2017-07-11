import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAndCommentsComponent } from './item-and-comments.component';

describe('ItemAndCommentsComponent', () => {
  let component: ItemAndCommentsComponent;
  let fixture: ComponentFixture<ItemAndCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAndCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAndCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
