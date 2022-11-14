import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'people-details',
    loadChildren: () => import('./pages/people-details/people-details.module').then( m => m.PeopleDetailsPageModule)
  },
  {
    path: 'planets-details',
    loadChildren: () => import('./pages/planets-details/planets-details.module').then( m => m.PlanetsDetailsPageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'character-details',
    loadChildren: () => import('./pages/character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'film-details',
    loadChildren: () => import('./pages/film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  },
  {
    path: 'film-details',
    loadChildren: () => import('./pages/film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  },
  {
    path: 'episode-details',
    loadChildren: () => import('./pages/episode-details/episode-details.module').then( m => m.EpisodeDetailsPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./pages/quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'quote-details',
    loadChildren: () => import('./pages/quote-details/quote-details.module').then( m => m.QuoteDetailsPageModule)
  },
  {
    path: 'death-counts',
    loadChildren: () => import('./pages/death-counts/death-counts.module').then( m => m.DeathCountsPageModule)
  },
  {
    path: 'death-count-details',
    loadChildren: () => import('./pages/death-count-details/death-count-details.module').then( m => m.DeathCountDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
