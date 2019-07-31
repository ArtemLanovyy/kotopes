import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

@NgModule({
    declarations: [CatComponent, DogComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        CatComponent, DogComponent,
    ],
})
export class SvgModule {
}
