import Header from './Header'
import Loader from './Loader'
import { Minus } from 'iconoir-react'
import { forwardRef } from 'react'

const Card = forwardRef(function(props, ref){

	let subtitles = []
	let index = 0
	while(subtitles.length < 3 && props.styles){
		if(index < props.styles.length){
			subtitles.push(props.styles[index])
		} else {
			subtitles.push(props.subsets[index - props.styles.length])
		}
		index += 1;
	}

	return (
		<section 
			ref={ref}
			className="relative w-full h-full bg-[white] v-flex text-color-500 p-8 rounded-2xl m-auto text-center overflow-hidden">
			<Header {...props} lock={props.lock} setLock={props.setLock}/>
			<h1 className="text-6xl md:text-8xl w-fit mx-auto my-auto">
				CcAa
			</h1>
			<p className="text-sm md:text-lg">
				Grumpy wizards make a toxic brew for the jovial queen.
			</p>

			<ul className="h-flex w-full justify-around text-xs md:text-xl py-2 mt-2 border-t-2">
				{
					subtitles.map((i, ind) => <li key={ind + props.id}>{i}</li>)
					// <Minus className="text-gray-300"/>
				}
			</ul>

			{
				props.isLoading && !props.lock && <Loader />
			}
		</section>
	)
})

export default Card