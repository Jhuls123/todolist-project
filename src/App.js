import AddTodoForm from "./components/AddTodoForm";
import TodoCompletedItems from "./components/TodoCompletedItems";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {
	const todos = useSelector((state) => state.todo);

	return (
		<div className='bg-gray-900 min-h-screen flex justify-center items-center'>
			<div className='bg-slate-100 h-auto w-72 rounded-2xl p-4 flex flex-col overflow-auto'>
				<div className="mb-5">
					<AddTodoForm />
				</div>
				<div className="flex-1">
					{todos.map((todo, index) => (
						<TodoList
							key={index}
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
						/>
					))}
				</div>
				<div>
					<TodoCompletedItems />
				</div>
			</div>
		</div>
	);
}

export default App;
