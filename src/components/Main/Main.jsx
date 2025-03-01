import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
export const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)

  return (
    <div className='main'>

        <div className="nav">
            <p>Gemini </p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello, Nitheesh</span></p>
                <p>How can I Help you today?</p>

            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />

                </div>
                <div className="card">
                    <p>who is Nitheesh Rajendran</p>
                    <img src={assets.bulb_icon} alt="" />
                    
                </div>
                <div className="card">
                    <p>who is vijay</p>
                    <img src={assets.message_icon} alt="" />
                    
                </div>
                <div className="card">
                    <p>what is react</p>
                    <img src={assets.code_icon} alt="" />
                    
                </div>
            </div>

            </>
            :<div className='result' >
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    <p dangerouslySetInnerHTML={{__html:resultData}} ></p>
                </div>
            </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter Prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                Gemini can make mistakes, so double-check it
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
