import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo ;
  @Output() deleteTd: EventEmitter<Todo> = new EventEmitter() ;
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo( todo: Todo ) {
    this.deleteTd.emit( todo ) ;
  }

}
