import Header from './Header'
import Loader from './Loader'
import { Minus } from 'iconoir-react'
import { forwardRef } from 'react'

const Card = forwardRef(function(props, ref){
	return (
		<section 
			ref={ref}
			className="relative w-full h-full bg-[white] text-color-500 p-8 rounded-2xl m-auto text-center overflow-hidden">
			<Header {...props} lock={props.lock} setLock={props.setLock}/>
			<h1 className="text-8xl w-fit mx-auto my-4">
				CcAa
			</h1>
			<p className="text-lg">
				Grumpy wizards make a toxic brew for the jovial queen.
			</p>

			{/*<ul className="h-flex w-full justify-around text-lg p-2 mt-2 border-t-2">
				<li>Sans Serif</li>
				<Minus className="text-gray-300"/>
				<li>Neutral</li>
				<Minus className="text-gray-300"/>
				<li>Classic</li>
			</ul>*/}

			{
				props.isLoading && !props.lock && <Loader />
			}
		</section>
	)
})

export default Card