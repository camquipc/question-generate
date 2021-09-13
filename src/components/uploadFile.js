
import React from "react"
import image  from '../assets/img/background.svg';

const UploadFile = React.forwardRef((props , ref) => {
   
    return <div style={{position:'absolute',width:'30px',
    height:'30px',}}>
       <img src={image} alt="test" onClick={(e) => ref.current.click()} 
       style={{
           width:'30px',
           height:'30px',
       }}
       />
       <input
          type="file"
          ref={ref}
          value=""
          name="image"
          onChange={e => props.uploadFile(e.target.files[0])}
          style={{ display: 'none' }}
        />
    </div>
});


export default UploadFile;