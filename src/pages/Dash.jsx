import { Link } from "react-router-dom";

export default function Dash(){
    return (
        <div className='font-alata'>
            <div className='flex flex-col h-screen items-center justify-center text-white'>
            <h1 className='p-12 font-black text-5xl text-center text-zinc-800'>User Dashboard</h1>
                <div className='grid grid-cols-3 gap-2 lg:gap-8 flex'>
                    <Link to="/training">
                    <div className='border border-red-800 border-4 hover:text-white text-zinc-800
                                    col-span-1 aspect-square text-center hover:bg-red-800 p-12 w-96
                                    flex flex-col gap-4 items-center justify-center rounded-lg'>
                        <h2 className='font-black text-3xl'>Training Topics</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    </Link>
                    <Link to="/interactive">
                    <div className='border border-red-800 border-4 hover:text-white text-zinc-800
                                    col-span-1 aspect-square text-center hover:bg-red-800 p-12 w-96
                                    flex flex-col gap-4 items-center justify-center rounded-lg'>
                        <h2 className='font-black text-3xl'>Interactive Videos and Case Studies</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    </Link>
                    <Link to="/visualization">
                    <div className='border border-red-800 border-4 hover:text-white text-zinc-800
                                    col-span-1 aspect-square text-center hover:bg-red-800 p-12 w-96
                                    flex flex-col gap-4 items-center justify-center rounded-lg'>
                        <h2 className="font-black text-3xl">Visualization of Incidents</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}