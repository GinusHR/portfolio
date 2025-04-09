import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaPhp, FaDatabase} from 'react-icons/fa';
import {SiTailwindcss, SiTypescript, SiMongodb, SiLaravel, SiMysql} from 'react-icons/si';

function Skills() {

    const frontendSkills = [
        {name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500 text-3xl"/>},
        {name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl"/>},
        {name: 'ReactJS', icon: <FaReact className="text-blue-500 text-3xl"/>},
        {name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-3xl"/>},
    ];

    const backendSkills = [
        {name: 'PHP', icon: <FaPhp className="text-indigo-500 text-3xl"/>},
        {name: 'Laravel', icon: <SiLaravel className="text-red-600 text-3xl"/>},
        {name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl"/>},
        {name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl"/>},
        {name: 'SQL', icon: <SiMysql className="text-blue-400 text-3xl"/>},
    ];

    return (
        <div className=" flex flex-col items-center justify-start ">
            <h2 className="text-[#f39f2b] text-3xl font-bold mb-6 drop-shadow-[3px_3px_0px_#663f29]">Mijn Skills</h2>
            <div className="w-[100vw] ">
                <div className="mx-10 flex flex-row items-start justify-evenly">

                    <div className="mb-8 w-2/5 animate-slide-in-right">
                        <h3 className="text-[#f39f2b] text-2xl font-semibold mb-4 text-center drop-shadow-[2px_2px_0px_#663f29]">--Frontend Development--</h3>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                            {frontendSkills.map((skill) => (
                                <div key={skill.name}
                                     className="bg-[#663f29] text-[#f39f2b] px-4 py-3 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 bg-[#f39f2b] animate-[progress_2s_linear_infinite]"></div>
                                    {skill.icon}
                                    <p className="mt-2">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="mb-8 w-2/5 animate-slide-in-right">
                        <h3 className="text-[#f39f2b] text-2xl font-semibold mb-4 text-center drop-shadow-[2px_2px_0px_#663f29]">--Backend Development--</h3>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                            {backendSkills.map((skill) => (
                                <div key={skill.name}
                                     className="bg-[#663f29] text-[#f39f2b] px-4 py-3 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 bg-[#f39f2b] animate-[progress_2s_linear_infinite]"></div>
                                    {skill.icon}
                                    <p className="mt-2">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;