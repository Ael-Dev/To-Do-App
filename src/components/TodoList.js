
import { TodoListItem } from './TodoListItem';

export const TodoList = ({Todos, handleDelete, handleToggle}) => {
  return (
    <div>
        <ul className='list-group list-group-flush'>
            {
                Todos.map((todo, index) => {
                    return (                        
                        <TodoListItem
                            key={todo.id}
                            todo = {todo}
                            index = {index}
                            handleDelete = {handleDelete}
                            handleToggle = {handleToggle}
                        />
                    );
                })
            }                    
        </ul>
    </div>
  )
}
