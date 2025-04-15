function Homepage() {
    return (
        <>
            <section className="w-[100vw] h-[50vh] ">
                <div className="flex flex-col justify-evenly mx-10 items-center h-[100%]">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-[#f39f2b] font-bold justify-center drop-shadow-[3px_3px_0px_#663f29]">Ginus van der Zee</h1>
                        <h2 className="text-[#f39f2b] font-bold justify-center drop-shadow-[3px_3px_0px_#663f29] text-2xl typewriter">--Fullstack Webdeveloper--</h2>
                    </div>
                    <div className="flex flex-row justify-evenly w-[100%] animate-slide-in-right">
                        <img src="/portfolio/foto2.jpg" alt="Foto van mij"
                             className="text-black border-2 border-black rounded-full w-[300px] h-[300px] object-cover drop-shadow-2xl"/>
                        <div className="text-[#f39f2b] bg-[#663f29] rounded-xl p-8 max-w-[30vw] drop-shadow-2xl">
                            Ik zit op de Hogeschool Rotterdam, ik volg de opleiding Creative Media en Game Technologies. Ik zit nu in het tweede jaar.
                            Ik heb ervaring met ruwe HTML/CSS, PHP en JavaScript. Ook met verschillende frameworks en libraries.
                            Ik ben een gefocuste, harde werker met een positieve instelling. Ik kan goed met veel verschillende soorten mensen werken.
                            Ik sla snel nieuwe kennis op en sta altijd open om nieuwe dingen te leren of al bestaande skills aan te scherpen.
                            Ik heb ook ervaring met LLMs en Neural Networks.
                        </div>
                    </div>

                </div>

            </section>
        </>


    )
}

export default Homepage