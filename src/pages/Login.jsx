export function LoginPage() {
    return (
        <div className="min-h-screen mx-auto grid content-center justify-center bg-sky-50">
            <form className="md:w-[556px]">
                <div className="border border-sky-50 rounded-md shadow p-10 md:h-[336px] grid content-center bg-sky-100">
                    <div className="mb-5">
                        <label htmlFor="username" className="block font-semibold">Username</label>
                        <input id="username" type="text" className="border rounded-md w-full p-1" placeholder="username" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block font-semibold">Password</label>
                        <input id="password" type="password" className="border rounded-md w-full p-1" placeholder="password" />
                    </div>
                    <div className="w-full text-center mt-2 mb-5">
                        <button className="border border-sky-900 rounded-md px-3 py-1 bg-sky-600 text-white font-semibold w-full">submit</button>
                    </div>
                    <div>
                        <p className="text-slate-600"><a href="#">Forgot Password</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
}