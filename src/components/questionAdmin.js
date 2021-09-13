import React, { useRef, useState, useEffect } from 'react'
import { fb } from "../services/firebase";

import mic from '../assets/img/micro.svg';
import upload from '../assets/img/upload.png';
import left from '../assets/img/left-icon.svg';
import right from '../assets/img/right-icon.svg';


import '../App.css'
import UploadFile from './uploadFile';
import AudioPlay from './audioPlay';

const TYPE = 25;

const initialQuestionValues = {
  num: null,
  type:TYPE,
  commande: null,
  optionType01:null,
  optionType02:null,
  optionType03:null,
  optionType04:null,
  optionValue01:null,
  optionValue02:null,
  optionValue03:null,
  optionValue04:null,
  image: null,
  sound: null,
  corrected: null
};

const QuestionAdmin = (props) => {

  const [store, setStore] = useState(initialQuestionValues);
  
  const setInputChange = (e) => {
      const { name, value } = e.target;
      setStore({ ...store, [name]: value });
  };

  const fileRef = useRef();
 
  const [position, setPosition] = useState(1);
  const [sound, setSound] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function  getData(){
      let db = fb.firestore().collection("questions");
      let questions = await db.get();
      for(const question of questions.docs){
        setStore(question.data())
      }
    }
    getData();
  },[])

  useEffect(() => {
    if (position) {
      setStore({...store, num:position });
    }
  }, [position]);

 
  const prev = () => {
    if (position === 1) {
      setPosition(props.numQuestion);
    } else {
      setPosition(position - 1);
    }
   
  };

  const next = () => {
    if (position === props.numQuestion) {
      setPosition(1);
    } else {
      setPosition(position + 1);
    }
   
  };


  const uploadFile = async (file) => {
    const storageRef = fb.storage().ref(`images/${file.name}`)
    const upload = storageRef.put(file)
    upload.on('state_changed', async(snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, (error) => {
      console.error(error.message)
    }, async () => {
      const urlImage = await upload.snapshot.ref.getDownloadURL();
      console.log(urlImage)
      setImage(urlImage)
      setStore({...store, image:urlImage });
    })
  }


  const onSave = async (event) => {
    event.preventDefault();
    try {
      await fb.firestore().collection("questions").doc().set(store);
      console.log('save item')
      setStore(initialQuestionValues)
      next();
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="slide">
      <form onSubmit={onSave} >
        <div className="content-body">
          <div className="comand">
            <input type="text"  className="comandeNum"
              value={position}
              readOnly
              name="num"
            />
            <input type="text" className="comande"
              name="commande"
              value={store.commande}
              onChange={setInputChange}
            />
          </div>
          <div className="bottons">
            <div className="left">
              <img src={mic} alt="test" className="icons" />
              <img src={upload} alt="test" className="icons" />
            </div>
            <div className="right">
              <AudioPlay/>
            </div>
          </div>
          <div className="body">
            <div className="image">
              {image ? <img src={store.image} alt={image} /> :
               <UploadFile ref={fileRef} uploadFile={uploadFile}/> 
              }
            </div>
            <div className="options">
              <input type="text"  className="comandeNum" onChange={setInputChange} name="optionType01" value={store.optionType01}/>

              <input type="text" className="comande" name="optionValue01" onChange={setInputChange} value={store.optionValue01}/>

              <input type="text"  className="comandeNum"  onChange={setInputChange} name="optionType02" value={store.optionType02}/>

              <input type="text" className="comande" name="optionValue02" onChange={setInputChange} value={store.optionValue02}/>

              <input type="text"  className="comandeNum"  onChange={setInputChange} name="optionType03" value={store.optionType03}/>

              <input type="text" className="comande" name="optionValue03" onChange={setInputChange} value={store.optionValue03}/>

              <input type="text"  className="comandeNum"  onChange={setInputChange} name="optionType04" value={store.optionType04}/>

              <input type="text" className="comande" name="optionValue04" onChange={setInputChange} value={store.optionValue04}/>
            </div>

          </div>

          <div className="controls">
            <div className="contador">
              <span>question  {position}/{props.numQuestion}</span>
              <span>correct   00/{props.numQuestion}</span>
            </div>
          </div>

          <div className="result">
            <label htmlFor="choise">choise
              <input type="text"  className="input-cilcle" />
            </label>
            <label htmlFor="corrected">correct
              <input type="text" className="input-cilcle" name="corrected" onChange={setInputChange} value={store.corrected}/>
            </label>
            <label htmlFor="result">result
              <input type="text"  className="input-cilcle" />
            </label>
          </div>

          <div className="nota">

            <div className="nota__label">correct no.</div>

            <div className="nota__input" style={{ marginBottom: '10px' }}>
              <input type="text" className="comande" />
              <input type="text" className="comande" style={{ height: '50px' }} />
            </div>

            <div className="nota__label">incorrect no.</div>
            <div className="nota__input">
              <input type="text" className="comande" />
              <input type="text" className="comande" style={{ height: '50px' }} />
            </div>
          </div>

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
        <div className="save">
          <input type="submit" className="btn" value="save" />
        </div>
      </form>
    </div>
  )
}

export default QuestionAdmin
