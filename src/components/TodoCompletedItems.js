import React from "react";
import { useSelector } from "react-redux";

function TodoCompletedItems() {
	const completedTodos = useSelector((state) =>
		state.todo.filter((item) => item.completed === true)
	);
	return (
		<>
			<h6 className='mt-10 font-serif'>
				Completed todo:{" "}
				<span className='text-red-500 text-2xl font-sans ml-2'>
					{completedTodos.length}
				</span>
			</h6>
		</>
	);
}

export default TodoCompletedItems;
