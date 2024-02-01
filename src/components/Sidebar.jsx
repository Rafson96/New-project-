import Button from '../UIelemtns/Button'
export default function SideBar({ onFormToggle, data, onHandleActive }) {
	return (
		<>
			<div className='w-64 rounded-lg bg-stone-900 text-white px-5'>
				<div className=' h-32 mt-10'>
					<h1>Your Projects</h1>
					<Button onClick={onFormToggle} content='+ Add Projects' />
				</div>

				<div>
					{data ? (
						<ul>
							{data.map((task, index) => (
								<li key={task.title} onClick={() => onHandleActive(index)} className='text-left px-4 py-2 '>
									{' '}
									{task.title}
								</li>
							))}
						</ul>
					) : (
						''
					)}
				</div>
			</div>
		</>
	)
}
