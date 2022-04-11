import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function AddTodoForm() {
	const dispatch = useDispatch();
	const [todos, setTodos] = useState("");
	const [error, setError] = useState(null);
    
	const addTodos = (e) => {
		e.preventDefault();
		if (todos.trim().length === 0) return setError("You must write something!");
		dispatch(addTodo({ title: todos }));
		setTodos("");
		setError("");
	};

	return (
		<>
			<h1 className='text-center mb-3 font-mono'>My Todo</h1>
			<form onSubmit={addTodos}>
				<div className='flex p-1 justify-center rounded-3xl space-x-1 flex-col relative'>
					<input
						className=' placeholder:text-xs focus:ring-green-500 font-mono text-gray-800 text-sm flex-1 border-none outline-none rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl pl-1 shadow-md'
						type='text'
						value={todos}
						onChange={(e) => setTodos(e.target.value)}
						placeholder='add todo...'
					/>
					<button className='absolute right-0 btn py-1 px-2 font-mono text-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-green-500 hover:text-green-900'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4v16m8-8H4'
							/>
						</svg>
					</button>
					<h6 className='absolute -bottom-4 text-red-800 font-mono text-xs'>{error}</h6>
				</div>
			</form>
		</>
	);
}

export default AddTodoForm;
