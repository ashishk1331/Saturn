import { useState } from 'react'
import { BrightStar, ArrowTr } from 'iconoir-react'

function cn(...classes){
	return classes.filter(Boolean).join(' ')
}

export default function Modal(props){

	const [ display, setDisplay ] = useState(true)

	return (
		<div className={cn("absolute inset-0 w-full h-full flex bg-color-500/50 backdrop-blur-sm z-50", !display ? 'hidden' : '')}>
			<div className="max-w-3/4 w-3/4 bg-[white] p-4 py-8 m-auto rounded-xl overflow-hidden flex flex-col items-center gap-8">

				<BrightStar className="w-fit mx-auto w-8 h-8"/>

				<h1 className="text-2xl px-4">
					This app is practical implementation of a design given by <a href="https://dribbble.com/sergeyfilimonov" className="underline flex items-center gap-2">Sergey Filimonov<ArrowTr className="w-6 h-6" /></a>
				</h1>

				<div className="relative px-4 w-full overflow-hidden rounded-xl max-w-[600px]">
					<img 
						src="https://cdn.dribbble.com/users/3137468/screenshots/16379191/media/9befb833f571f196fff8f2fc1fb0665e.png?compress=1&resize=1000x750&vertical=top" 
						alt="Image of the idea by Sergey." 
						className="w-full h-full object-cover"
					/>
					<a href="https://dribbble.com/shots/16379191-Font-pairing" className="absolute bottom-0 right-0 mr-8 mb-2 text-lg text-[white] underline flex items-center">
						view project here
						<ArrowTr className="w-5 h-5" />
					</a>
				</div>

				<button 
					className="bg-color-500 p-3 px-12 rounded-xl text-[white] font-medium uppercase tracking-wider"
					onClick={() => setDisplay(false)}
				>
					Close
				</button>
			</div>
		</div>
	)
}