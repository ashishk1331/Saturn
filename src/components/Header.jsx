import { Lock, NoLock, Enlarge } from 'iconoir-react'

function cn(...classes){
	return classes.filter(Boolean).join(' ')
}

export default function Header(props){

	return (
		<div className="w-full h-flex">
			<div className="v-flex text-left">
				<h1 className="text-2xl w-full">{props.id ? props.id.substring(0,12) : 'font name'}</h1>
				<p className="text-sm w-fit mr-auto">{props.family || 'font family'}</p>
			</div>
			{/*<button
				className="ml-auto p-3"
			>
				<Enlarge />
			</button>*/}
			<button 
				className="p-3 ml-auto"
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