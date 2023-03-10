import {Component} from '@angular/core';

@Component({ //decorator function 
    selector: 'courses',
    template: `
    <h2>{{"title: " + getTitle()}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
    `
})
export class CoursesComponent{
   title = "list of courses"

   getTitle(){
    return this.title
   }

//    courses = ["maths", "scintz", "history"] //replaced by service class see courses.services.ts
    courses:String[] = []
}