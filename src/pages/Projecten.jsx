const werk = [
    {
        name: "PunchPark",
        description: "Een liefdesbrief naar de oude arcade classic Punch-Out. Mijn eerste game, gemaakt met ExcaliburJS, deze 2D fighter biedt 8 bosses en speelt zich af in bekend Rottterdams park, het Hefpark",
        picture_path: "/portfolio/PP.png",
        link: "https://vincentbenders.github.io/CLE4/",
    },
    {
        name: "Viktoria's Schoonmaakbedrijf",
        description: "Mijn eerste website voor een opdrachtgever, deze website is gemaakt met ruwe php en heeft een MySQL database. In deze website zit een reserverings systeem waarmee je schoonmaaks afspraken kan inplannen en beheren",
        picture_path: "/portfolio/schoon.png",
        link: "https://project.hosted.hr.nl/2023_2024/ressys_t17/CLE_2_project/",
    },
    {
        name: "CyberNoir",
        description: "Dit project kwam voort uit toen we de opdracht kregen om een dystopish toekomstbeeld te maken. Met mijn team bedenken wij hoe de illegale verkoop van cybernetische onderdele eruit zou kunnen zien",
        picture_path: "/portfolio/cyberN.png",
        link: "https://project.hosted.hr.nl/2024_2025/tle1_exp_t11/TLE-1-team-11/"
    },
    {
        name: "Open Hiring",
        description: "IO Digital kwam naar onze opleiding toe met een casus, maak een website voor Open Hiring. Open Hiring wilt aannemen makkelijker maken, met een nadruk op mensen die misschien moeilijker een baan krijgen.(De link leidt naar de Github pagina)",
        picture_path: "/portfolio/openH.png",
        link: "https://github.com/GinusHR/TLE-Agency-Team6"
    },
    {
        name: "Slime Slayer",
        description: "Een solo project waarin ik de basics van game design en programming toe pas. In Slime Slayer speel je als 1 van de 2 karakters om zo veel mogelijk Slimes te verslaan. Werk samen voor de hoogste score.",
        picture_path: "/portfolio/slimeS.png",
        link: "https://ginushr.github.io/banger-periode4/"
    },
    {
        name: "General Shao Fan Page",
        description: "Mijn aller eerste website. Een fan page zonder backend. Ik heb sinds deze website al veel geleerd en gegroeid, toch wil ik deze laten zien. Als bericht naar mezelf, zodat ik altijd kan zien hoe ver ik gekomen ben",
        picture_path: "/portfolio/shao2.png",
        link: "https://ginushr.github.io/wireframe-eindopdracht/"
    }
];

function Projecten() {

    return (
        <>
            <section className="flex w-full h-full flex-row gap-4 overflow-auto px-4 animate-slide-in-right ">

                    {werk.map((project) => (
                        <article className="bg-[#663f29] text-[#f39f2b] min-w-[25rem] h-[54vh] pr-5 pl-5 pt-3 rounded-2xl transition-all transform hover:scale-x-105 relative">
                            <h2 className="font-bold text-2xl mb-0.5">{project.name}</h2>
                            <div className="w-[100%] flex justify-center">
                                <img src={project.picture_path} alt="project-foto" className="w-[400px] h-[240px]  rounded-lg"/>
                            </div>
                            <div className="flex flex-col bg-[#f39f2b] bg-opacity-80 text-black mt-1 p-1 rounded-2xl">
                                <div>
                                    {project.description}
                                </div>
                                <div className="flex flex-row-reverse align-bottom">
                                    <a target="_blank" href={project.link} className="text-[#0f1020] drop-shadow-[1px_2px_0px_#246A73] hover:text-[#246A73] hover:drop-shadow-[1px_1px_0px_#0f1020]">Link</a>
                                </div>
                            </div>

                        </article>
                    ))}


            </section>
        </>
    )
}


export default Projecten