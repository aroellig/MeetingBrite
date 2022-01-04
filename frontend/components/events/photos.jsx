import React from 'react'

const PhotoForm = (props) => {
 
return(
  <div className='photo-box'>
    <br/>
    <div >
      <h1 id='photo-title'>Upload an image for you event </h1>
     
    {props.photoURL ? <img className="upload-photo" height="200px" width="200px" src={props.photoURL} /> : null}
    
      <label for="form-photo-upload">
        Upload Photo
      </label>
      <input id="form-photo-upload" type="file"  
        onChange={props.handleFile} />
    </div>
</div>
)
}

export default PhotoForm;