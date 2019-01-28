import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  showCreateTodo: boolean;
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.showCreateTodo = false;
  }

  ngOnInit() {
    this.showCreateTodoForm();
  }

  showCreateTodoForm() {
    this.showCreateTodo = true;
  }

  createTodoForm() {
    this.todoForm = this.formBuilder.group({
      todo: ['', { updateOn: blur, validator: [Validators.required] }]
    });
  }

  addNewTodo() {
    console.log(this.todoForm.value);
  }


}
