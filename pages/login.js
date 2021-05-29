import Head from 'next/head'
import Image from 'next/image'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import CopyrightIcon from '@material-ui/icons/Copyright'

const login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Logged In')
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log('Sign Up user')
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <Head>
                <title>Amazon - Login</title>
            </Head>
            <div className="flex flex-col w-[60%]">
                <div className="flex flex-col items-center">
                    <Image
                        src="/amazon-logo-black.png"
                        width={200}
                        height={70}
                    />
                </div>

                <div className="flex flex-col border p-6 w-[100%] mt-10">
                    <h1 className="font-semibold text-4xl">Sign-In</h1>
                    <form>
                        <div className="flex flex-col space-y-1 mt-5">
                            <label className="font-bold">Email</label>
                            <input
                                type="email"
                                className="bg-white border p-2 outline-none focus:ring-2 focus:ring-[#EC9200]"
                            />
                        </div>

                        <div className="flex flex-col space-y-1 mt-5 rounded-lg">
                            <label className="font-bold">Password</label>
                            <input
                                type="password"
                                className="bg-white border p-2 outline-none focus:ring-2 focus:ring-[#EC9200] rounded-lg"
                            />
                        </div>

                        <button
                            className="mt-5 bg-[#FFAE42] w-full p-2 font-medium rounded-md border border-black"
                            onClick={handleLogin}
                        >
                            Continue
                        </button>
                    </form>

                    <p className="mt-5">
                        By continuing, you agree to Amazon's{' '}
                        <span className="text-[#0091F7] cursor-pointer">
                            Conditions of Use
                        </span>{' '}
                        and{' '}
                        <span className="text-[#0091F7] cursor-pointer">
                            Privacy Notice
                        </span>
                        .
                    </p>

                    <div className="flex items-center mt-10">
                        <ArrowRightIcon />
                        <p className="text-[#0091F7] cursor-pointer">
                            Need Help?
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-10 space-y-5 border-b border-[#808080] pb-10">
                    <p className="text-[#808080]">New to Amazon?</p>

                    <button
                        className="border border-black w-full bg-[#c0c0c0] rounded-sm py-2"
                        onClick={handleSignUp}
                    >
                        Create your Amazon account
                    </button>
                </div>

                <div className="flex justify-between mx-10 mt-10">
                    <p className="text-[#0091F7] cursor-pointer">
                        Conditions of Use
                    </p>
                    <p className="text-[#0091F7] cursor-pointer">
                        Privacy Notice
                    </p>
                    <p className="text-[#0091F7] cursor-pointer">Help</p>
                </div>

                <div className="text-[#808080] flex items-center justify-center mt-5">
                    <CopyrightIcon />
                    <p>1996-2021, Amazon.com, Inc or its affiliates</p>
                </div>
            </div>
        </div>
    )
}

export default login
