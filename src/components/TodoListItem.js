export const TodoListItem = ({todo, index , handleDelete, handleToggle}) => {      
    return (
    <div>
        <li key={todo.id} className='list-group-item'>
            <p 
                className={`${todo.done && 'complete'}`} 
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1}. {todo.description}
            </p>                          
            <button 
                className='btn btn-outline-danger'
                onClick={() => handleDelete(todo.id)}
                >
                Delete
            </button>
        </li>
    </div>
  )
}
