import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>DilipxGemini 2.0</p>
        <img src={assets.user_icon} alt="user" />
      </div>

      <div className="main-container">

        {!showResult
        ?<>
         <div className="greet">
          <p><span>Hello, Connections!</span></p>
          <p>How can I assist you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>How to get a tech job without actually knowing how to code? Asking for a friend!</p>
            <img src={assets.compass_icon} alt="compass" />
          </div>
          <div className="card">
            <p>What's the one skill that will get me hired, besides "googling answers"?</p>
            <img src={assets.bulb_icon} alt="bulb" />
          </div>
          <div className="card">
            <p>What's the most bizarre interview question you've ever heard in tech?</p>
            <img src={assets.message_icon} alt="message" />
          </div>
          <div className="card">
            <p>How to look like you're working hard while secretly daydreaming about vacation?</p>
            <img src={assets.code_icon} alt="code" />
          </div>
        </div>
        </>
            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" className='icon' style={{width:'70px',height:'70px', borderRadius:50 }}/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" style={{width:'40px',height:'40px'}}/>
                    {loading
                     ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                     </div>
                     : <p dangerouslySetInnerHTML={{__html: resultData }}></p>
                    }
                   
                </div>
                </div>

        }

       

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
             {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="send" />:null } 
            </div>
          </div>
          <p className="bottom-info">
            Your Nex-Gem assistant: providing insights, but always remember to verify!
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Main;
