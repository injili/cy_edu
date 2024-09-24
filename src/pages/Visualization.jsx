import Microlink from '@microlink/react'

export default function Visualization() {
    return (
        <div>
            <h2 className='text-center font-alata font-black m-4 text-4xl'>VISUALIZATION OF INCIDENT DATA</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <Microlink className="p-4 my-4 w-96" contract url="https://colab.research.google.com/drive/1QHFj2_Kwgr71x-4iehpE9LB7EjpxtjRr#scrollTo=e1084b6c" />
                <Microlink className="p-4 my-4 w-96" contract url="https://colab.research.google.com/drive/1QHFj2_Kwgr71x-4iehpE9LB7EjpxtjRr#scrollTo=e1084b6c" />
            </div>
        </div>
    )
}