import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from './todo.service';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call 'todo' service`, () => {
    const expectedTodos = [
      {
        name: 'ravi',
        age: 32,
        status: 'accepted'
      }
    ];
    
    const service = TestBed.get(TodoService);
    
    service.getTodoList().subscribe((todos) => {
      component.todoList = todos;
      expect(expectedTodos.length).toEqual(1);
      expect(service).toBeDefined();
      expect(expectedTodos).toBe(todos);
      console.log('component.todoList :::   ', component.todoList);
    });

    // console.log('component.todoList :::   ', component.todoList);
  });
});
