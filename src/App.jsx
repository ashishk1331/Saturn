import Card from './components/Card'
import Toast from './components/Toast'
import Modal from './components/Modal'
import { Shuffle, Lock } from 'iconoir-react'
import { getList, fetchFont, randomFont } from './util/useFont.js'
import { useState, useEffect, useRef } from 'react'

export default function App(props){

    const [ fonts, setFonts ] = useState(null)
    const [ fontOne, setFontOne ] = useState(null)
    const [ fontTwo, setFontTwo ] = useState(null)
    const [ lockOne, setLockOne ] = useState(false)
    const [ lockTwo, setLockTwo ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    const upper = useRef()
    const lower = useRef()

    async function shuffle(r){
        setIsLoading(true)
        let one, two;
        if(!lockOne){
            one = await fetchFont(upper.current, randomFont(r, ''))
            setFontOne(one)
        }

        if(!lockTwo){
            if(one === undefined){
                one = fontOne
            }
            two = await fetchFont(lower.current, randomFont(r, one.id))
            setFontTwo(two)
            }
        setIsLoading(false)
    }

    useEffect(() => {
        (async function(){
            setIsLoading(true)
            let r = await getList()
            setFonts(r)
            await shuffle(fonts || r)
        })()
    }, [])

    return (
        <div className="relative w-full h-screen v-flex md:flex-row bg-color-500 justify-between p-8">
            {  
                isLoading && <Toast />
            }
            <Card ref={upper} {...fontOne} lock={lockOne} setLock={setLockOne} isLoading={isLoading}/>
            <Card ref={lower} {...fontTwo} lock={lockTwo} setLock={setLockTwo} isLoading={isLoading}/>
            <button 
                className="absolute top-1/2 -translate-y-[50%] md:left-1/2 md:-translate-x-[50%] bg-color-100 h-flex p-3 px-6 text-lg font-medium text-color-500 rounded-full"
                onClick={() => {
                    if(!isLoading){
                        shuffle(fonts)
                    }
                }}
            >
            {
                !isLoading ?
                <>
                    <Shuffle />
                    Shuffle
                </>
                :
                <Lock />
            }
            </button>

            <Modal />
        </div>
    )
}