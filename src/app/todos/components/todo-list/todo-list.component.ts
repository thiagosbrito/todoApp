import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Todo {
  id: string;
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
    this.todoList.subscribe(todo => console.log(todo));
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
      id: btoa(new Date().toISOString()),
      description: this.todoForm.get('todo').value,
      completed: false,
      uid: this._auth.auth.currentUser.uid
    };
    this.todosCollection.doc(obj.id).set(obj);
  }

  removeTodo(todo) {
    this.todosCollection.doc(todo.id).delete().then(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    this.todosCollection.doc(todo.id).set(todo);
  }

}
