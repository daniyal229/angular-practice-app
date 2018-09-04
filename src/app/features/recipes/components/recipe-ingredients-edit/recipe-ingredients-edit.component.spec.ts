import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientsEditComponent } from './recipe-ingredients-edit.component';

describe('RecipeIngredientsEditComponent', () => {
  let component: RecipeIngredientsEditComponent;
  let fixture: ComponentFixture<RecipeIngredientsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngredientsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
