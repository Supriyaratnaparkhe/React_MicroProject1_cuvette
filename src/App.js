import React,{useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import CardFront from './components/CardFront/CardFront'
import CardBack from './components/CardBack/CardBack';
function App() {
  const [formData, setFormData]=useState({
    cardNumber:'',
    holderName:'',
    month:'',
    year:'',
    cvv:''
  });
  const handleFormSubmit = (data)=>{
    setFormData(data);
  }
  return (
    <div>
      <CardFront cardNumber={formData.cardNumber}
        holderName={formData.holderName}
        month={formData.month}
        year={formData.year}/>
      <CardBack cvv={formData.cvv}/>
      
      <Form onSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
