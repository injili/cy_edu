export default function Signup() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen font-alata text-white'>
                <div className='rounded-lg bg-zinc-800'>
                    <form action="" className='p-8'>
                        <h1 className='font-black text-3xl pb-8'>SIGN UP</h1>
                        <div className='flex flex-row gap-2 justify-between items-center mb-2'>
                            <label htmlFor="username">Username</label>
                            <input name='username' type="text" className='rounded-sm p-2'/>
                        </div>
                        <div className='flex flex-row gap-2 justify-between items-center mb-2'>
                            <label htmlFor="email">Email</label>
                            <input name='email' type="text" className='rounded-sm p-2'/>
                        </div>
                        <div className='flex flex-row gap-2 justify-between items-center'>
                            <label htmlFor="password">Password</label>
                            <input name='password' type="text" className='rounded-sm p-2'/>
                        </div>
                        <button className='w-full text-center p-2 mt-8 mb-8 border border-2 border-red-800 font-black rounded-sm'>SUBMIT</button>
                        <p>have an account? <span className='text-red-800'>Log In</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}