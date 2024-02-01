import { useRef } from 'react'
import Button from '../UIelemtns/Button'

export default function Taskform({ onFormToggle, onSave }) {
	const inputRefTitle = useRef()
	const inputRefDescription = useRef()
	const inputRefDate = useRef()

	function handleSaveData(e) {
		e.preventDefault()

		const data = {
			title: inputRefTitle.current.value,
			description: inputRefDescription.current.value,
			date: inputRefDate.current.value,
			tasks: []
		}

		if (
			!inputRefTitle.current.value.trim() ||
			!inputRefDescription.current.value.trim() ||
			!inputRefDate.current.value.trim()
		) {
			alert('Podaj wszystkie dane')
		} else {
			onSave(data)
			inputRefTitle.current.value = ''
			inputRefDescription.current.value = ''
			inputRefDate.current.value = ''
		}
	}

	return (
		<form className=' h-96 justify-around px-10 w-full flex flex-col'>
			<div className='flex justify-end'>
				<Button onClick={onFormToggle} content='Cancel' className=' mr-4' />
				<Button onClick={handleSaveData} content='Save' />
			</div>
			<label htmlFor='text'>Title</label>
			<input ref={inputRefTitle} className='py-2 w-full bg-slate-300' type='text' id='text' />

			<label htmlFor='message' className='block mb-2 text-sm  text-gray-90'>
				Your message
			</label>
			<textarea
				ref={inputRefDescription}
				id='message'
				rows='4'
				className='block p-2.5 w-full text-gray-90 bg-gray-50 rounded-lg border  '
				placeholder='Write your thoughts here...'></textarea>
			<label htmlFor='date'>Start date:</label>

			<input
				ref={inputRefDate}
				className='py-2 w-full bg-slate-300'
				type='date'
				id='date'
				name='date'
				defaultValue='2024-01-22'
				min='2024-01-22'
				max='2025-12-31'
			/>
		</form>
	)
}
