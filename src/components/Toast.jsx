import { SystemRestart } from 'iconoir-react'
import { motion } from 'framer-motion'

export default function Toast(props){
	return (
		<motion.div 
			initial={{ y: '-50%', x: '-50%', opacity: 0.6 }}
			animate={{ y: 0, x: '-50%', opacity: 1 }}
			className="absolute top-0 left-1/2 bg-color-100 text-color-500 font-medium p-6 px-12 m-2 w-fit h-fit z-10 rounded-xl flex flex-col items-center gap-2">
			<SystemRestart className="animate-spin"/>
			loading fonts
		</motion.div>
	)
}