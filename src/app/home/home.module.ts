import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';
import { LogoModule } from '../shared/logo/logo.module';
import { ResultCardListModule } from '../shared/result-card-list/result-card-list.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule,
        LogoModule,
        ResultCardListModule,
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
