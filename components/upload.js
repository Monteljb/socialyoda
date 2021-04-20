//Imported useState from react
import { useState } from 'react';

//Functional Component Defined
function Upload(props) {

//Components state 
const [file, setFile] = useState(null)

//Handle any  click events or additional functions
function handleChange(event) {
  setFile(
    URL.createObjectURL(event.target.files[0])
  )
}

//Conditions
const imgShow = file ? <img width="400px" className="img-fluid" src={file} alt="preview"/> : null
  
//Render
return (
    <div>
    <input type="file" onChange={handleChange} multiple/>
    {imgShow}
    </div>
  );
}

export default Upload;
