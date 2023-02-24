import { Lock, NoLock } from 'iconoir-react'

function cn(...classes){
	return classes.filter(Boolean).join(' ')
}

export default function Header(props){

	return (
		<div className="w-full h-flex">
			<div className="v-flex">
				<h1 className="text-2xl w-full">{props.id || 'font name'}</h1>
				<p className="text-sm w-fit mr-auto">{props.family || 'font family'}</p>
			</div>
			<button 
				className="ml-auto p-3"
				onClick={() => {
					props.setLock(!props.lock)
				}}
			>
			{
				props.lock ?
				<Lock className='text-[black]'/>
				:
				<NoLock className='text-gray-300'/>
			}
			</button>
		</div>
	)
}