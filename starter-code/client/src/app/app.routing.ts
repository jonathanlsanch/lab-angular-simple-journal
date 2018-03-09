import { Routes } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: '**', redirectTo: '' }
];