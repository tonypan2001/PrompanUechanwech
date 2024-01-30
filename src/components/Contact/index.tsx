import { JackInTheBox, Slide } from 'react-awesome-reveal'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

function Contact() {
    // const form = useRef<HTMLFormElement>(null);

    const user_name = useRef<HTMLInputElement>(null)
    const user_email = useRef<HTMLInputElement>(null)
    const message = useRef<HTMLTextAreaElement>(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => emailjs.init(PUBLIC_KEY), [])

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            await emailjs.send(
                SERVICE_ID, 
                TEMPLATE_ID, 
                {
                    user_name: user_name.current?.value, 
                    user_email: user_email.current?.value,
                    message: message.current?.value
                },
                PUBLIC_KEY
            )
            alert("Message sent successfully")
        } catch (error) {
            console.error(error)
            alert("Sorry, " + error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section>
            <div className="h-full min-h-[100vh] bg-ctm-light-purple flex flex-col lg:flex-row-reverse justify-around items-center py-16">
                <Slide direction="down" duration={1300} triggerOnce>
                    <div className="mt-12 mb-12 p-8 bg-ctm-dark-purple rounded-md">
                        <h1 className="text-[30px] md:text-[40px] font-bold"><span className="text-ctm-pink-base">Find</span> me on</h1>
                        <ul>
                            <li className="text-[18px]">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <a href="mailto:prompan.ue@gmail.com" target="_blank" className="ml-2 text-ctm-pink-base underline">prompan.ue@gmail.com</a>
                            </li>
                            <li className="text-[18px]">
                                <FontAwesomeIcon icon={faGithub}/>
                                <a href="https://github.com/tonypan2001" target="_blank" className="ml-2">tonypan2001</a> 
                            </li>
                            <li className="text-[18px]">
                                <FontAwesomeIcon icon={faLinkedin}/>
                                <a href="https://www.linkedin.com/in/prompan-uechanwech-78b44b2b0/" target="_blank" className="ml-2">Prompan Uechanwech</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-extrabold text-3xl">OR</h3>
                    </div>
                </Slide>
                <div className="">
                    <Slide cascade direction="down" duration={1300} triggerOnce>
                        <div className="text-center mb-12 px-4">
                            <h1 className="text-[30px] md:text-[40px] font-bold"><span className="text-ctm-pink-base">Write</span> me a Message</h1>
                            <p className="text-[16px] md:text-[20px] text-wrap">
                                Got a question? I'd love to hear from you. Send me a message and I'll respond ASAP.
                            </p>
                        </div>
                    </Slide>
                    <JackInTheBox duration={1300} triggerOnce>
                        <form onSubmit={sendEmail} className="w-full bg-ctm-dark-purple rounded-md p-8">
                            <div className="flex flex-col justify-center mb-3">
                                <label htmlFor="user_name" className="text-[20px] font-semibold mb-1">Name</label>
                                <input 
                                className="w-full shadow text-[18px] text-ctm-black focus:outline-none focus:ring-2 focus:ring-ctm-pink-base p-4"
                                type="text"
                                name="user_name"
                                placeholder="ex. John Doe"
                                ref={user_name}
                                required
                                />
                            </div>
                            <div className="flex flex-col justify-center mb-3">
                                <label htmlFor="user_email" className="text-[20px] font-semibold mb-1">Email</label>
                                <input 
                                className="w-full shadow text-[18px] text-ctm-black focus:outline-none focus:ring-2 focus:ring-ctm-pink-base p-4"
                                type="email"
                                name="user_email"
                                placeholder="ex. johndoe@example.com"
                                ref={user_email}
                                required
                                />
                            </div>
                            <div className="flex flex-col justify-center mb-3">
                                <label htmlFor="message" className="text-[20px] font-semibold mb-1">Message</label>
                                <textarea 
                                className="text-[18px] text-ctm-black focus:outline-none focus:ring-2 focus:ring-ctm-pink-base p-4"
                                name="message" 
                                id="message" 
                                rows={5} 
                                placeholder="Your message"
                                ref={message}
                                required 
                                />
                            </div>
                            <button 
                            className="w-full text-4xl text-ctm-yellow-base border-2 border-ctm-yellow-base hover:text-ctm-pink-base hover:border-ctm-pink-base hover:bg-ctm-yellow-base ease-in duration-150 mt-8 mb-12 p-2.5"
                            type="submit" 
                            value="Send"
                            disabled={loading}
                            >
                                <span className={`${loading ? 'hidden' : 'block'}`}>
                                    Send Message
                                </span>
                                <span className={`${loading ? 'block' : 'hidden'} flex flex-row justify-center`}>
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                                    Sending...
                                </span>
                            </button>
                        </form>
                    </JackInTheBox>
                </div>
            </div>
        </section>
    )
}

export default Contact