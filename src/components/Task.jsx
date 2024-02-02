import { useState } from 'react'

export default function Task({ data, index, onRemoveTask, onSaveData }) {
	const [taskInput, setTaskInput] = useState('')

	function handleAddTask() {
		if (taskInput.trim() === '') {
			// Opcjonalnie obsłuż pusty przypadek wprowadzania
			return
		}
		onSaveData(prevState => {
			const newData = [...prevState]
			const newTasks = [...newData[index].tasks, taskInput]
			newData[index] = { ...newData[index], tasks: newTasks }
			return newData
		})
		setTaskInput('')
	}

	//add new task to array
	//When we remove project from data, we have here prob
	function handleRemoveTask(taskIndex) {
		onSaveData(prevState => {
			const newData = [...prevState]
			// Utwórz nową tablicę zadań bez zadania o podanym indeksie
			const newTasks = newData[index].tasks.filter((s, i) => i !== taskIndex)
			newData[index] = { ...newData[index], tasks: newTasks }
			return newData
		})
	}

	return (
		<div className='flex flex-col px-5 h-3/4 w-full'>
			{data.length ? (
				<div className='mt-16 flex flex-col '>
					<button onClick={() => onRemoveTask(index)} className='ml-auto order-0'>
						Delete
					</button>
					<h1 className=' font-semibold text-3xl '>{data[index].title}</h1>
					<p className='text-sm  text-gray-400 tracking-tight mt-2'>{data[index].date}</p>
					<p className='mt-4 mb-8 '>{data[index].description}</p>
				</div>
			) : (
				''
			)}

			<hr />
			<hr />
			<div>
				<h2 className='mt-2 mb-2 text-2xl font-semibold'>Task</h2>
				<div>
					<input onChange={e => setTaskInput(e.target.value)} className='py-1 w-1/2 bg-slate-300 mr-4' type='text' />
					<button onClick={() => handleAddTask()}>Add Task</button>
				</div>
			</div>
			<div>
				{data[index].tasks.length ? (
					<ul className=' bg-slate-200 mt-5 radius rounded-sm px-3 py-3'>
						{data[index].tasks.map((task, taskIndex) => (
							<li className='mb-2 flex justify-between' key={taskIndex}>
								{task} <button onClick={() => handleRemoveTask(taskIndex)}>Clear</button>
							</li>
						))}
					</ul>
				) : (
					''
				)}
			</div>
		</div>
	)
}
