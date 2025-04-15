import {Link, Outlet} from "react-router";

function Layout () {
    return (
        <>
            <div className="flex flex-col gap-[12vh] w-[100vw] h-[100vh] bg-gradient-to-br  from-[#fffaff] from-15% to-[#246A73] to-95% items-center font-[Sans_Serif_Neo_Grotesque]">
            <header className="flex flex-row justify-evenly w-[100%]">
                <nav className="flex flex-row  bg-[#0f1020] h-[12vh] w-[100%] justify-evenly items-center">
                    <img src="/portfolio/mascot.png" alt="LOGO" className="max-w-[7vh]"/>
                    <Link to={'/'} className=" text-xl font-bold text-[#f39f2b] drop-shadow-[2px_2px_0px_#246A73] hover:text-[#f39f2b] hover:drop-shadow-[2px_2px_0px_#246A73] hover:scale-110 transition-all transform">Home</Link>
                    <Link to={'/projecten'} className="text-xl font-bold text-[#f39f2b] drop-shadow-[2px_2px_0px_#246A73] hover:text-[#f39f2b] hover:drop-shadow-[2px_2px_0px_#246A73] hover:scale-110 transition-all transform">Projecten</Link>
                    <Link to={'/skills'} className="text-xl font-bold text-[#f39f2b] drop-shadow-[2px_2px_0px_#246A73] hover:text-[#f39f2b] hover:drop-shadow-[2px_2px_0px_#246A73] hover:scale-110 transition-all transform">Skills</Link>
                </nav>
            </header>
            <main className=" w-[100vw] h-[100vh] overflow-auto">
                <Outlet/>
            </main>
            <footer
                className=" bg-[#0f1020] w-[100%] absolute bottom-0 h-[10vh] flex flex-row justify-evenly">
                <div className=" flex w-20 justify-center items-center">
                    <img className="h-14"  src="/portfolio/linkedIn.png" alt="LinkedIn logo"/>
                    <a className="text-[#f39f2b] drop-shadow-[2px_2px_0px_#246A73] hover:text-[#f39f2b] hover:drop-shadow-[2px_2px_0px_#246A73] hover:scale-110 transition-all transform text-[1.1rem] font-bold" target="_blank" href="https://www.linkedin.com/in/ginus-van-der-zee-fullstack-web-developer-b10320352/">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2 w-20">
                    <img className="bg-white rounded-full h-14" src="/portfolio/github.png" alt="Github logo"/>
                    <a className="text-[#f39f2b] drop-shadow-[2px_2px_0px_#246A73] hover:text-[#f39f2b] hover:drop-shadow-[2px_2px_0px_#246A73] hover:scale-110 transition-all transform text-[1.1rem] font-bold" target="_blank" href="https://github.com/GinusHR">Github</a>
                </div>


            </footer>
            </div>
        </>

    )
}

export default Layout