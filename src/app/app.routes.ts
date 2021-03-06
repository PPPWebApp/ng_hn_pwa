import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { ItemAndCommentsComponent } from './item-and-comments/item-and-comments.component';

const routes: Routes = [
    {path:'', redirectTo: 'news/1', pathMatch: 'full'},
    {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
    {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
    {path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
    {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
    {path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
    {path: 'item/:id', component: ItemAndCommentsComponent}
];

export const routing = RouterModule.forRoot(routes);