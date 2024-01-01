import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoItem } from './TodoItem';
import { TodoAdd } from './TodoAdd';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() + 100,
    //     description: 'Recolectar la piedra del poder',
    //     done: false
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch(action);
    };

    const handleRemoveTodo = (id) => {
        console.log(id);
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };

        dispatch(action);
    };

    const onToggleTodo = (id) => {
        console.log(id);

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };

        dispatch(action);
    };

    return (
        <>
            <div className='row'>
                <div className='col-7'>
                    <h2>Todo app <span className="badge rounded-pill text-bg-secondary">{ todos.filter(todo => todo.done === true).length }/{ todos.length }</span></h2>
                    <hr />
                    <ul className='list-group p-1'>
                        <TodoItem todos={ todos } onRemoveTodo={ handleRemoveTodo} onToggleTodo={ onToggleTodo } />
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>

            </div>
        </>
    );
};
