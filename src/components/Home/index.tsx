import { Link } from 'react-router-dom'
import Fade, { Slide } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Snowfall from 'react-snowfall'
import Typewriter from 'typewriter-effect'

import person from '../../assets/images/person.svg'
import wave1 from '../../assets/svg/wave1.svg'
import wave2 from '../../assets/svg/wave2.svg'

function Home() {
    return (
        <section>
            {/* FIRST BLOCK */}
            <div className="relative min-h-[100vh] bg-ctm-light-purple flex flex-col lg:flex-row justify-center sm:justify-around items-center px-4 py-16">
                <Snowfall snowflakeCount={50} />
                <Slide direction="left" triggerOnce>
                    <div className="p-4 flex flex-col items-center xl:items-end">
                        <div className="flex flex-col items-start">
                            <h1 className="text-[30px] sm:text-[50px] xl:text-[60px]">
                                Hi There! ✋🏼
                            </h1>
                            <h2 className="text-[20px] sm:text-[40px] xl:text-[50px] mb-4">
                                I'm <span className="text-ctm-pink-base">Prompan Uechanwech</span>
                            </h2>
                            <h3 className="text-3xl xl:text-5xl text-ctm-yellow-base font-normal">
                                <Typewriter
                                    options={{
                                        strings: ['Frontend Developer','JS Master','Graphics Designer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />

                                {/* <span className="hover:text-ctm-yellow-base">
                                    Frontend Developer
                                </span>&nbsp;/&nbsp;
                                <span className="hover:text-ctm-yellow-base">
                                    JS Master
                                </span>&nbsp;/&nbsp;
                                <span className="hover:text-ctm-yellow-base">
                                    Graphics Designer
                                </span> */}
                            </h3>
                        </div>

                        <div className="mt-8 p-4">
                            <Link to="/contact" className="border-2 border-ctm-yellow-base text-4xl text-ctm-yellow-base font-bold p-2.5 hover:text-ctm-pink-base hover:bg-ctm-yellow-base rounded-md ease-in duration-300">
                                <FontAwesomeIcon icon={faWhatsapp} className="mr-2"/>
                                CONTACT ME
                            </Link>
                        </div>
                    </div>
                </Slide>
                <Slide direction="right" triggerOnce>
                <div className="mt-8">
                {/* bg-ctm-lightest-purple */}
                    <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] xl:w-[450px] xl:h-[450px] bg-ctm-lightest-purple rounded-full">
                        <img className="w-[250px] sm:w-[300px] xl:w-[400px] pointer-events-none" src={person} alt="" />
                    </div>
                </div>
                </Slide>
                <img 
                className="absolute bottom-0 pointer-events-none"
                src={wave1} 
                alt="" 
                />
            </div>

            {/* SECOND BLOCK */}
            <div className="relative min-h-[100vh] bg-ctm-dark-purple flex flex-col justify-center items-center p-6" id='overview'>
                <Snowfall snowflakeCount={50} />
                <Fade triggerOnce>
                    <div className="flex flex-col justify-center items-center p-6">
                        <h2 className="text-2xl mb-2">INTRODUCTION</h2>
                        <h1 className="text-6xl mb-2">
                            Overview.
                        </h1>
                        <p className="text-[20px] sm:text-[25px] font-thin max-w-[800px]">
                            Hi, I'm <span className="text-ctm-pink-base font-normal">Prompan Uechanwech</span> from <span className="text-ctm-pink-base font-normal">Kasetsart University.</span> I'm a student studying computer science. Additionally, I have a strong interest in graphic design, games, and web development. I'm a skilled software developer with experience in HTML, CSS, JavaScript and TypeScript, and I have been practicing in frameworks like Vue.js, Nuxt.js, Laravel and React.
                        </p>
                    </div>
                </Fade>
                <Fade triggerOnce>
                    <div className="text-[20px] text-center font-medium mt-8">
                        "The more you get, The more you grow"
                    </div>
                </Fade>
                <img 
                className="absolute bottom-0 pointer-events-none"
                src={wave2} 
                alt="" 
                />
            </div>

            {/* THIRD BLOCK */}
            <div className="relative min-h-[100vh] bg-ctm-darkest-purple flex flex-col justify-between lg:justify-center pt-12 pb-12">
                <Snowfall snowflakeCount={50} />
                <Fade triggerOnce>
                    <div className="flex flex-col justify-center items-center gap-8 mb-12">
                        <h1 className="text-4xl sm:text-5xl px-4">Programming <span className="text-ctm-pink-base">Languages</span></h1>
                        <div className="grid grid-cols-2 lg:grid-cols-6 text-[50px] sm:text-[80px] text-center gap-6">
                            <i className="devicon-javascript-plain border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-typescript-plain border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-html5-plain-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-css3-plain-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-php-plain border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-python-plain-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-csharp-plain border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                        </div>
                    </div>
                </Fade>
                <Fade triggerOnce>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <h1 className="text-4xl sm:text-5xl px-4"><span className="text-ctm-pink-base">Frameworks</span> and <span className="text-ctm-pink-base">Libraries</span></h1>

                        <div className="grid grid-cols-2 lg:grid-cols-6 text-[50px] sm:text-[80px] text-center gap-6">
                            <i className="devicon-vuejs-plain-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-nuxtjs-plain-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-react-original-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-laravel-plain-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-tailwindcss-original-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                            <i className="devicon-threejs-original-wordmark border rounded-lg p-8 hover:text-ctm-yellow-base ease-in duration-300"></i>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Home