import react  from 'react'

export const TodoWrapper = () => {
    return (
        <form className='TodoForms'> 
        <input type='text' className='todo-input' placeholder='what is the task today?' />
        <button type='submit' className='todo-btn'> 
        </button>
        </form>
    )
}

