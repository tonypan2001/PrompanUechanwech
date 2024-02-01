import Snowfall from 'react-snowfall'

import wave4 from '../../assets/svg/wave4.svg'

const Projects = () => {
    return (
        <section>
            <div className="relative h-[100vh] bg-ctm-dark-purple flex justify-center items-center">
                <Snowfall snowflakeCount={100}/>
                <div className="relative z-10">
                    <div className='heading'>
                        <h1 className="text-[40px] opacity-50">I WILL REPLACE MY PROJECTS HERE SOON...</h1>
                    </div>
                    <div className="content">

                    </div>
                </div>
                <img 
                className="absolute bottom-0 z-0 pointer-events-none"
                src={wave4} 
                alt="" 
                />
            </div>
        </section>
    )
}

export default Projects