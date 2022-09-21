import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] ;
  localStorageDB: string | null ;
  constructor() { 
    this.localStorageDB = localStorage.getItem('todos') ;
    if( this.localStorageDB == null ) {
      this.todos = [] ;
    } else {
      this.todos = JSON.parse( this.localStorageDB ) ;
    }
  }

  ngOnInit(): void {
  }

  addNewTodo( todo: Todo ) {
    this.todos.push( todo ) ;
    localStorage.setItem('todos', JSON.stringify( this.todos )) ;
  }
  deleteTodo( todo: Todo ) {
    const index = this.todos.indexOf( todo ) ;
    this.todos.splice( index ) ;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
