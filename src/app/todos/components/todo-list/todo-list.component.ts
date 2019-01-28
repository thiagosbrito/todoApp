import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Todo {
  description: string;
  uid?: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  showCreateTodo: boolean;
  todoForm: FormGroup;
  todosCollection: AngularFirestoreCollection<Todo>;
  todoList: Observable<Todo[]>;

  constructor(private formBuilder: FormBuilder, private _store: AngularFirestore, private _auth: AngularFireAuth) {
    this.showCreateTodo = false;
    this.todosCollection = this._store.collection<Todo>('todos');
  }

  ngOnInit() {
    this.todoList = this.todosCollection.valueChanges();
    this.createTodoForm();
  }

  showCreateTodoForm() {
    this.showCreateTodo = true;
  }

  createTodoForm() {
    this.todoForm = this.formBuilder.group({
      todo: ['', { updateOn: 'blur', validator: [Validators.required] }]
    });
  }

  addNewTodo() {
    const obj: Todo = {
      description: this.todoForm.get('todo').value,
      completed: false,
      uid: this._auth.auth.currentUser.uid
    };
    this.todosCollection.add(obj);
  }


}
