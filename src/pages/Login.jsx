export default function Login() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='rounded-lg bg-neutral-200'>
                    <form action="" className='p-8'>
                        <h1 className='font-semibold text-5xl pb-8'>Login</h1>
                        <div className='flex flex-row gap-2 justify-between items-center mb-2'>
                            <label htmlFor="username">Username</label>
                            <input name='username' type="text" className='rounded-lg p-2'/>
                        </div>
                        <div className='flex flex-row gap-2 justify-between items-center'>
                            <label htmlFor="password">Password</label>
                            <input name='password' type="text" className='rounded-lg p-2'/>
                        </div>
                        <button className='w-full text-center p-2 mt-8 mb-8 border border-cyan-200 rounded-lg'>Submit</button>
                        <p>have no account? <span>Sign Up</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}