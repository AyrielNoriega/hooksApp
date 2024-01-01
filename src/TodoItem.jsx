export const TodoItem = ({ todos = [], onRemoveTodo }) => {
    return (
        <>
            {
                todos.map(({ id, description, done }) => (
                    <li key={ id } className='list-group-item d-flex justify-content-between'>
                        <span>{ description }</span>
                        <button className='btn btn-danger' onClick={ () => onRemoveTodo(id) }>Borrar</button>
                    </li>
                ))
            }

        </>
    );
};
