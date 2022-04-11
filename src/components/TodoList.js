import React from "react";
import { todoCompleted, deleteTodo, editTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function TodoList(props) {
	const { id, title, completed } = props;

	const dispatch = useDispatch();

	const completeHandler = () => {
		dispatch(todoCompleted(id));
	};
	const removeTodo = () => {
		dispatch(deleteTodo({ id: id }));
	};
  
	return (
		<div
			className={`${
				completed
					? "flex items-center bg-gray-200 p-1 mb-1 rounded-xl"
					: "flex bg-gray-300 items-center p-1 mb-1 rounded-xl"
			}`}>
			<input
				type='checkbox'
				checked={completed}
				onChange={completeHandler}
				className='cursor-pointer bg-gray-300 rounded-full text-green-500 focus:border-0 focus:ring-0 focus:ring-offset-0'
			/>
			<div className='flex-1 font-mono ml-1 text-gray-800'>
				<h6 className={`${completed && "line-through text-gray-500"}`}>
					{title}
				</h6>
			</div>
			<button
				className={`${
					completed
						? "cursor-not-allowed hidden"
						: "btn border-2 text-xs px-1 font-mono uppercase border-none"
				}`}
				onClick={removeTodo}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 hover:text-red-700'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
					/>
				</svg>
			</button>
		</div>
	);
}

export default TodoList;
