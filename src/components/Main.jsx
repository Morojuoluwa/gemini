
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/Context'
import { Triangle } from 'react-loader-spinner';
import { Swiper, SwiperSlide } from 'swiper/react';

import { darta } from '../dartar';
import 'swiper/css'
import { register } from 'swiper/element/bundle';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

register()

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
    // const loadPrompt = async(prompt) =>{
    //     setRecentPrompt(prompt)
    //     await onSent(prompt)
    // }
  return (
    <div className=' max-sm:h-screen overflow-hidden sm:h-full  flex-1 pb-[15vh]'>
        <div className=' flex items-center justify-between text-[22px] p-5 text-[#585858]'>
            <p>Gemini</p>
            <img className='w-[40px] h-[40px] object-cover rounded-[50%]' src='me.jpg'/>
        </div> 
        <div className=' max-w-[900px] m-auto'>
            {!showResult?(
                <>
                    
                    <div className='mt-[30px] mb-4 max-sm:px-4 mx-0 text-[56px] text-[#c4c7c5}'>
                        <p><span className=' bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500'>Hello, there</span></p>
                        <p className=' text-gray-400'>How can i help you today?</p>
                    </div>
                    <div className='w-full max-sm:hidden mb-[2.7rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] p-5'>
                        <div className='kad'>
                            <p className='pee'>Suggest beautiful places to see on a road trip</p>
                            <img className='emage' src={assets.compass_icon}/>
                        </div>
                        <div className='kad'>
                            <p className='pee'>Briefly summarize this concept: urban planning</p>
                            <img className='emage' src={assets.bulb_icon}/>
                        </div>
                        <div className='kad'>
                            <p className='pee'>Brainstormteam bonding activities for our work retreat </p>
                            <img className='emage' src={assets.message_icon}/>
                        </div>
                        <div className='kad'>
                            <p className='pee'>What is the study of economics?</p>
                            <img className='emage' src={assets.code_icon}/>
                        </div>
                    </div>
                  
                        <Swiper className='w-[80%] mb-10 sm:hidden' slidesPerView={1}>
                            {
                                darta.map((card, index)=>( 
                                    <SwiperSlide key={index}>
                                        <div className='kad' >
                                            <p className='pee'>{card.text}</p>
                                            <img className='emage' src={card.img} alt=''/>
                                         </div>
                                    </SwiperSlide>
                                    
                                ))
                            }
                        </Swiper>
                       
                    
                 </>
              ):(
                <div className='px-[5%] max-h-[70vh]  overflow-y-scroll scrol'>
                    <div className=' my-10 flex items-center gap-5'>
                        <img className=' w-10 h-[40px] object-cover rounded-[50%]' src='me.jpg'/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className=' flex h-[70vh] items-start max-sm:gap-x-2 gap-5'>
                        <img className='w-10' src={assets.gemini_icon} alt=''/>
                        {loading&& 
                        
                         <div className=' flex h-[60vh] justify-center items-center w-full'>
                            <Triangle
                            visible={true}
                            height="50"
                            width="50"
                            color="#3fadfc"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                         </div>
                         }
                        <p className='text-[17px]   overflow-hidden font-light leading-[1.8]' dangerouslySetInnerHTML={{__html:resultData}}></p>
                        
                    </div>
                </div>
            )}

            <div className=' w-full max-w-[900px] px-5 m-auto'>
                <div className='flex items-center sm:mb-10 justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-[50px]'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} className=' max-sm:w-[60%] flex-1 bg-transparent border-none outline-none p-2 text-[18px]' type='text' placeholder='Enter a prompt here'/>
                    <div className=' flex items-center gap-4'>
                        <img className='searchImg' src={assets.gallery_icon} alt="" />
                        <img className='searchImg' src={assets.mic_icon} alt="" />
                        {input&&<img onClick={()=>onSent()} className='searchImg' src={assets.send_icon} alt="" />}
                    </div>
                </div>
                <p className=' text-[13px] my-4 mx-auto text-center font-light'>
                    Gemini may display inaccurate info, including about people. so double-check its responses. Your privacy and gemini apps.
                </p>
                <div className=' flex justify-center gap-x-3 sm:hidden'>
                    <Link to="https://github.com/Morojuoluwa">
                        <FaGithubSquare className='icn'/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/patrick-morojuoluwa'>
                        <FaLinkedin className='icn'/>
                    </Link> 
                    <Link to='https://twitter.com/Amorojuoluwa'>
                        <FaTwitter className='icn'/>   
                    </Link> 
            
            
                </div>
            </div>
        </div>
    </div>
  
  )
  
}

export default Main