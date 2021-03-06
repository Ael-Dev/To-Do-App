
// hooks
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(description.length < 1 || description === ''){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }
        
    return (
        <>
            <h4>Add To Do</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Description...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <button 
                    type = 'submit'
                    className='btn btn-outline-primary mt-1 btn-block'                        
                >
                    Add
                </button>
            </form>
        </>
    )
}
