import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { BasicDataComponent } from './pages/basic-data/basic-data.component';
import { FavoriteRecipeComponent } from './pages/favorite-recipe/favorite-recipe.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
  {
    path: "basic-data",
    component: BasicDataComponent,
  },
  {
    path: "favorites",
    component: FavoriteRecipeComponent,
  },
  {
    path: "**",
    redirectTo: "",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }