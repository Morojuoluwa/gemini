import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/Context'
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [extend, setExtend] = useState(false)
    const {onSent, prevPrompt,setRecentPrompt, newChat} = useContext(Context)
    const loadPrompt = async(prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className=' min-h-screen max-sm:hidden inline-flex flex-col py-[25px] px-[15px] justify-between bg-[#f0f4f9] '>
        <div>
            <img onClick={()=>setExtend(prev =>!prev)} className='emg block ml-[10px] cursor-pointer' src={assets.menu_icon}/>
            <div onClick={() => newChat()}  className='inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-300 mt-[10px] cursor-pointer'>
                <img className=' emg' src={assets.plus_icon} alt=''/>
              {extend &&<p>New Chat</p>}
            </div>
            {extend&&<div className=' flex flex-col'>
                <p className=' mt-[30px] mb-[20px]'>Recent</p>
                {prevPrompt.map((item)=>(
                    <div key={item.id} onClick={()=>loadPrompt(item)} className=' flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer text-[#282828] hover:bg-[#e2e6eb]'>
                        <img className='emg block ml-[10px] cursor-pointer' src={assets.message_icon}/>
                        <p>{item}...</p>
                     </div>
                ))}
                
            </div>}
        </div>
        <div className=' flex flex-col'>
            <div className='btnEmg'>
                <img className='emg block ml-[10px] cursor-pointer' src={assets.question_icon}/>
               {extend&& <p>Help</p>}
            </div>
            <div className='btnEmg'>
                <img className='emg block ml-[10px] cursor-pointer' src={assets.history_icon}/>
               {extend && <p>Activity</p>}
            </div>
            <div className='btnEmg '>
                <img className='emg block ml-[10px] cursor-pointer' src={assets.setting_icon}/>
                {extend&&<p>Setting</p>}
            </div>
        </div>
      
        <div className=' flex justify-between'>
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
  )
}

export default Sidebar