import loginLogo from '../../public/images/login-logo.svg';
import Footer from './Footer';

const Login = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className="container  flex-grow">
                <nav className="flex justify-between items-center pt-4">
                    <a href="/" className="flex items-center">
                        <img
                            src={loginLogo}
                            alt="LinkedIn Logo"
                            className="h-8"
                        />
                    </a>
                    <ul className="flex justify-between items-center gap-2">
                        <li>
                            <a href="/" className="text-[#181818] font-semibold px-6 py-3 rounded-3xl cursor-pointer hover:bg-[#f5f5f5]">
                                Join now
                            </a>
                        </li>
                        <li>
                            <button className="text-[#0a66c2] font-semibold px-6 py-3 border border-[#0a66c2] rounded-3xl cursor-pointer hover:bg-[#f0f8ff]">
                                Sign in
                            </button>
                        </li>
                    </ul>
                </nav>
                <main className="mt-20">
                    <div className='md:flex gap-10'>
                        <div>
                            <h1 className='text-[32px] md:text-[48px] text-[#526a6e] text-center md:text-left my-10'>Welcome to your professional community </h1>
                            <button className='flex justify-center gap-2 border rounded-3xl py-2 w-full md:max-w-[400px]  cursor-pointer hover:bg-[#f5f5f5]'>
                                <img src="/images/google.svg" alt="Google-Logo" />
                                <span className='text-center font-semibold text-[#323130]'>Sign in with Google</span>
                            </button>
                            <p className='text-[12px] text-[#818181] text-center my-10'>By clicking Continue to join or sign in, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p></div>
                        <div className='md:mr-[-150px]'>
                            <img src="../../public/images/login-hero.svg" alt="login-hero" />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Login;