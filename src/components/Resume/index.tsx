import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import cv from '../../assets/pdf/cv.jpg'
import wave3 from '../../assets/svg/wave3.svg'

import { Snowfall } from "react-snowfall"

function Resume() {
    return(
        <section>
            <div className="min-h-[100vh] bg-ctm-light-purple flex justify-center items-center py-18">
                <Snowfall snowflakeCount={30}/>
                <div className="text-center mt-40 px-4 py-8">
                    <div className="mb-12">
                        <a href="https://shorturl.at/esNQ5" target="_blank"
                        className="text-[16px] px-4 py-2.5 border border-ctm-yellow-base text-ctm-yellow-base hover:bg-ctm-yellow-base hover:text-ctm-pink-base ease-in duration-150">
                            <FontAwesomeIcon icon={faDownload} className="mr-2"/>
                            Download CV
                        </a>
                    </div>
                    <img src={cv} width={800} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Resume