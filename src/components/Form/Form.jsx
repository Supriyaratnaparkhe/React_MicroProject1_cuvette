import React, { useState, useEffect} from "react";
import "./Form.css";
import Rectangle from "./Rectangle1.png";

function Form({onSubmit}) {
  const [state,setState]=useState({
    cardNumber:'',
    holderName:'',
    month:'',
    year:'',
    cvv:''
  })

  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [monthDigit, setMonthDigit] = useState('');
  const [yearDigit, setYearDigit] = useState('');
  const [cvvDigit, setCvvDigit] = useState('');
  
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (state) => {
    let errors = {};
    if(!state.holderName){
      errors.holderName = "*please enter holdername"
    }
    if (!state.cardNumber || state.cardNumber.length < 19) {
      errors.cardNumber = "*please enter valid card number";
    }
    if (!state.month || !state.year) {
      errors.month = "*please enter month and year";
    }
    if(state.month<1 || state.month>12){
      errors.month = "*please enter valid month";
    }
    if (!state.cvv || state.cvv.length < 3) {
      errors.cvv = "*please enter valid cvv";
    }
    return errors;
  };
 
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      
      onSubmit(state);
    }
  }, [errors]);

  const updateCard=(e)=>{
    let {name,value}=e.target;
    setState({
        ...state,
        [name]:value
    })
  }
  const handleCardNumber=(e)=>{
    const cardValue = e.target.value.replace(/\D/g, ''); 
    if (cardValue.length <= 16) {
      const formattedValue = cardValue
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .substring(0, 19); 
      setCreditCardNumber(formattedValue);
    }
  }
  const handleMonth=(e)=>{
    const newMonth = e.target.value.replace(/\D/g, '');
    if(newMonth.length <=2)
    {
      setMonthDigit(newMonth)
    }
  }
  const handleYear=(e)=>{
    const newYear = e.target.value.replace(/\D/g, '');
    if(newYear.length <=2)
    {
      setYearDigit(newYear)
    }
  }
  const handleCvv=(e)=>{
    const newCvv = e.target.value.replace(/\D/g, '');
    if(newCvv.length <=3)
    {
      setCvvDigit(newCvv)
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setErrors(validateValues(state));
    setSubmitting(true); 
  }
 
  return (   
    <>
      <div className="box">
        <div className="image">
          <img src={Rectangle} alt="" />
        </div>
        <div className="container">
          <div className="form1">
              {Object.keys(errors).length === 0 && submitting ? (
              <span className="success">Successfully submitted ✓</span>
              ) : null}
            <form onSubmit={handleSubmit}>
              <div className="name">CARDHOLDER'S NAME</div>
              <div>
                <input
                  type="text"
                  className="input-box"
                  name='holderName'
                  value={state.holderName}
                  onChange={updateCard}
                  id="user-input"
                  placeholder="e.g. Jane Appleseed"
                /><br/>
                <span className="error">{errors.holderName}</span>
              </div>
              <div className="name">CARD NUMBER</div>
              <div>
                <input
                  type="text"
                  className="input-box"
                  name='cardNumber'
                  value={creditCardNumber}
                  onChange={e=> { handleCardNumber(e) ; updateCard(e);}}
                  id="card-number"
                  maxLength="19"                
                  placeholder="e.g. 1234 5678 9123 0000"
                /><br/>
                <span className="error">{errors.cardNumber}</span>
              
              </div>
              <div className="card">
                <div className="exp">
                  <div className="name">EXP.DATE (MM/YY)</div>
                  <div>
                    <input
                      type="text"
                      className="input-box1"
                      name='month'
                      value={monthDigit}
                      onChange={e=> { handleMonth(e) ; updateCard(e);}}
                      maxLength={2}
                      id="mm"
                      placeholder="MM"
                    />
                    <input
                      type="text"
                      className="input-box1"
                      name='year'
                      value={yearDigit}
                      onChange={e=> { handleYear(e) ; updateCard(e);}}
                      maxLength={2}
                      id="yy"
                      placeholder="YY"
                    />
                  </div>
                </div>
                <div className="cvc">
                  <div className="name">CVC</div>
                  <div>
                    <input
                      type="text"
                      className="input-box2"
                      name='cvv'
                      value={cvvDigit}
                      onChange={e=> { handleCvv(e) ; updateCard(e);}}
                      maxLength={3}
                      id="cvc"
                      placeholder="e.g. 123"
                    />
                  </div>                
                </div>              
              </div>
              <span className="error">{errors.month }</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span className="error">{errors.cvv}</span>
              <br/>
              <button type="submit" className="confirm">
                <div id="but">Confirm</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
