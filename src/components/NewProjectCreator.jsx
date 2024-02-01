import Button from '../UIelemtns/Button'
import { BiSolidNotepad } from 'react-icons/bi'

export default function NewProjectCreator({ onFormToggle }) {
	const style = { fontSize: '5rem' }
	return (
		<div className='flex flex-col justify-center items-center mr-auto ml-auto text-center h-64'>
			<BiSolidNotepad style={style} />
			<h3 className='mb-2'>No project Selected </h3>
			<p>Select a project or get started with a new one </p>
			<Button onClick={onFormToggle} content='Add new project' />
		</div>
	)
}
