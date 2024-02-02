import { useState } from 'react'
import SideBar from './components/Sidebar'
import Taskform from './components/TaskForm'
import NewProjectCreator from './components/NewProjectCreator'
import Task from './components/Task'
function App() {
	const [isFormOpen, setFormOpen] = useState(false)
	const [data, setData] = useState([])
	const [active, setisActive] = useState(false)
	const [indexTask, setIndexTask] = useState()

	function handleToggleForm() {
		setFormOpen(prevState => !prevState)
		setisActive(false)
	}

	function saveData(newData) {
		setData(prevState => [...prevState, newData])
	}

	function handleActiveClick(index) {
		setIndexTask(index)
		setisActive(true)
	}
	function removeTask(index) {
		setData(prevData => {
			const newData = prevData.filter((s, i) => i !== index)
			return newData
		})
	}

	let content
	if (isFormOpen && !active) {
		content = <Taskform onSave={saveData} onFormToggle={handleToggleForm} />
	} else if (active && data.length) {
		content = <Task onSaveData={setData} index={indexTask} onRemoveTask={removeTask} data={data}></Task>
	} else if ((!isFormOpen && !active) || !data.length) {
		content = <NewProjectCreator onFormToggle={handleToggleForm} />
	}

	return (
		<div className='flex max-w-3xl mx-auto h-3/4 mt-10  '>
			<SideBar onHandleActive={handleActiveClick} data={data} onFormToggle={handleToggleForm} />
			<>{content}</>
		</div>
	)
}

export default App
