import { useState,useContext, SetStateAction } from "react";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';
import { TracksContext } from "../context/TracksContext";

const Form = () => {
  const {addTrack} = useContext(TracksContext);
  const navigate= useNavigate();
  const [name,setName] = useState('');
  const [date,setDate] = useState('');
  const [reminder,setReminder] = useState<boolean>(false);

  
  const handleChange = (target: { name: string; value: SetStateAction<string>; }) =>{
    if(target.name === 'name'){
         setName(target.value);
    }
    if(target.name === 'date'){
      setDate(target.value);
 }
  }


  const handleSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();

    const id = Math.floor(Math.random() * 1001);

    addTrack({id,name,date})

    setReminder(false);
    setDate('');
    setName('');
    navigate('/');
  }


  return (
    <>
    <h2 className="text-xl text-center mb-10 font-bold">Add a new Iterinary</h2>
    <form className={`mb-0 space-y-6`}>
      
     <Input id="name" name="name" handleChange={handleChange} value={name} label="name"/>
     
      <Input id="date" name="date" handleChange={handleChange} value={date} label="Date & time" />

      <button type="submit" onClick={handleSubmit} className="form-btn">Submit</button>
    </form>
    </>
  );
};

export default Form;
