export const TodoItem = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
    return (
        <>
            {
                todos.map(({ id, description, done }) => (
                    <li key={ id } className='list-group-item d-flex justify-content-between'>
                        <span
                            style={{ cursor: 'pointer' }}
                            onDoubleClick={ () => onToggleTodo(id) }
                            className={ done ? 'text-success text-decoration-line-through' : '' }
                        >
                            { description }
                        </span>
                        <button className='btn btn-danger' onClick={ () => onRemoveTodo(id) }>Borrar</button>
                    </li>
                ))
            }

        </>
    );
};
