import React, {  useState, useEffect } from 'react'
import { fb } from "../services/firebase";

import mic from '../assets/img/micro.svg';

import left from '../assets/img/left-icon.svg';
import right from '../assets/img/right-icon.svg';


import '../App.css'

import AudioPlay from './audioPlay';

//import { questions } from '../api/question';




const QuestionUser = (props) => {

  const [position, setPosition] = useState(1);

  const [result, setResult] = useState([{position:null,choise:null}]);

  const [store, setStore] = useState([]);
  
  useEffect(() => {
    let d = [];
    async function  getData(){
      let db = fb.firestore().collection("questions");
      let questions = await db.get();
      for(const question of questions.docs){
       d.push(question.data()) 
      }
      return setStore(d);
    }
    getData();
  },[])

  const prev = () => {
    if (position === 1) {
      setPosition(store.length);
    } else {
      setPosition(position - 1);
    }
    
  };

  const next = () => {
    if (position === store.length) {
      setPosition(1);
    } else {
      setPosition(position + 1);
    }
    
  };


  return (
    <div className="slide">
       
        {
            store.filter(f => f.num === position).map(q => {
                return(
                    <div className="content-body">
                    <div className="comand">
                      <input type="text" min="0" className="comandeNum"
                        value={q.num}
                        readOnly="true"
                      />
                      <input type="text" className="comanded"
                        value={q.commande}
                        readOnly="true"
                      />
                    </div>
                    <div className="bottons">
                      <div className="left">
                        <img src={mic} alt="test" className="icons" />
                      </div>
                      <div className="right">
                       { q.sound && <AudioPlay audio={q.sound}/>} 
                      </div>
                    </div>
                    <div className="body">
                      <div className="image">
                        {q.image ? <img src={q.image} alt={q.image} /> : null}
                      </div>
                      <div className="options">
                        <input type="text" min="0" className="comandeNum input-cilcle"
                          value={q.optionType01}  readOnly="true"
                          />
          
                        <input type="text" className="comande"
                          value={q.optionValue01}  readOnly="true"
                         />
          
                        <input type="text" min="0" className="comandeNum input-cilcle"
                          value={q.optionType02}  readOnly="true"
                          />
          
                        <input type="text" className="comande"
                          value={q.optionValue02}  readOnly="true"
                           />
          
                        <input type="text" min="0" className="comandeNum input-cilcle"
                          value={q.optionType03}  readOnly="true"
                           />
          
                        <input type="text" className="comande"
                          value={q.optionValue03}  readOnly="true"
                           />
          
                        <input type="text" min="0" className="comandeNum input-cilcle"
                          value={q.optionType04}  readOnly="true"
                           />
          
                        <input type="text" className="comande"
                          value={q.optionValue04}  readOnly="true"
                           />
                      </div>
          
                    </div>
          
                    <div className="controls">
                      <div className="contador">
                        <span>question  {position}/{store.length}</span>
                        <span>correct   00/{store.length}</span>
                      </div>
                    </div>

                   {/* <div className="result">
                      <label htmlFor="choise">choise
                        <input type="text" name="choise" className="input-cilcle"
                          value={result.position === q.num ? result.choise : ''}
                          onChange={(e) => setResult({ position:position,choise:e.target.value }  ) }
                        />
                      </label>
                      <label htmlFor="corrected">correct
                        <input type="text" className="input-cilcle" readOnly="true"/>
                      </label>
                      <label htmlFor="result">result
                        <input type="text" name="result" className="input-cilcle"  readOnly="true"/>
                      </label>
                    </div> */}
          
                    <div className="controls">
                      <div className="arrow">
                        {
                          props.numQuestion && <>
                            <img src={left} alt="test" className="icons" onClick={() => prev()} />
                            <img src={right} alt="test" className="icons" onClick={() => next()} />
                          </>
                        }
                      </div>
                    </div>
                 </div>
                )
            })
          }
     
    </div>
  )
}

export default QuestionUser
