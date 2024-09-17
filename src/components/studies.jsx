import Microlink from '@microlink/react'

export default function Studies() {
    return (
        <div className='flex flex-wrap gap-4'> 
            <Microlink className="w-96 rounded-lg p-4 my-4" url="https://lilibetz.vercel.app/" contrast/>
            <Microlink className="w-96 rounded-lg p-4 my-4" url="https://tailwindcss.com/docs/" contrast/>
            <Microlink className="w-96 rounded-lg p-4 my-4" url="https://www.notion.so/injili-7015deea2bd141139aaf01876ba1b2af" contrast/>
        </div>
    )
}