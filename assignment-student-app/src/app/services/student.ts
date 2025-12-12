import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [
    {
      name: "Mohit",
      class: "9",
      gender: "Male",
      hasHobby: true,
      hobby: "Football",
      favoriteSubject: "Math"
    },
    {
      name: "Hrithika",
      class: "6",
      gender: "Female",
      hasHobby: false,
      hobby: "",
      favoriteSubject: "Science"
    }
  ];
   addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}
