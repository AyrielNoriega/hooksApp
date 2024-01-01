import { useForm } from './hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;
        console.log('new todo', description.length);

        const newTodo = {
            id: new Date().getTime() + 100,
            done: false,
            description
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <input
                type='text'
                placeholder='que hay que hacer?'
                className='form-control'
                name='description'
                value={ description }
                onChange={ onInputChange }
            />

            <button className='btn btn-primary m-1' type='submit'>
                Agregar
            </button>

            <a className='btn btn-primary m-1' onClick={ onResetForm }>
                Borrar
            </a>
        </form>
    );
};
