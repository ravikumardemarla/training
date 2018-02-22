import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('TodoSerive', () => {
    let service: TodoService;
    let mockHttp: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService],
            imports: [HttpClientTestingModule]
        });

        service = TestBed.get(TodoService);
        mockHttp = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        mockHttp.verify();
    });

    it(`should call 'getTodoList' service `, () => {
        const expectedTodos = [{
            name: 'ravi',
            age: 32,
            status: 'accepted'
        }];

        service.getTodoList().subscribe((todos) => {
            expect(todos.length).toBe(1);
            expect(todos).toEqual(expectedTodos);
        });

        const request = mockHttp.expectOne(`${environment.TODO_URL}`);
        expect(request.request.method).toEqual('GET');
        request.flush(expectedTodos);
    });
});
