import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class CoursesService  {

  private readonly API = 'http://localhost:8080/api/courses';

  constructor(private HttpClient: HttpClient) { }

  list() {
    return this.HttpClient.get<Course[]>(this.API)
    .pipe(
      first(),

      tap(courses => console.log(courses))
    );
  }

  save(course: Course) {
    return this.HttpClient.post<Course>(this.API, course).pipe(first());

  }

}







