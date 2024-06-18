import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from "./category.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {Category} from "./category.model";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  categoryService = inject(CategoryService);
  categories: Category[] | undefined;
  currentActiveCategory: Category = this.categoryService.getCategoryByDefault();
  ngOnInit(): void {
    this.fetchCategories()
  }
  private fetchCategories(){
    this.categories = this.categoryService.getCategories();
  }
}
