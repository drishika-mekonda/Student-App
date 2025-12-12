import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student';
import { Student } from '../models/Student';



@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {

  form: any;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
   
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favoriteSubject: ['']
    });
  }
    get cls() {
    return this.form.get('class')?.value;
  }

  submit() {
    if (this.form.invalid) return;

    const student: Student = {
      name: this.form.value.name!,
      class: this.form.value.class!,
      gender: this.form.value.gender!,
      hasHobby: this.form.value.hasHobby!,
      hobby: this.form.value.hasHobby ? this.form.value.hobby! : null,
      favoriteSubject: this.form.value.favoriteSubject || null
    };

    this.studentService.addStudent(student);
    this.router.navigate(['/home']);
  }
}