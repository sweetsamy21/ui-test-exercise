import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { validateRoutingNumber, validateCVV} from './utils.js';

import './style/bootstrap.min.css';
import './style/App.css';

function OneTimePaymentForm() {
  const [formData, setFormData] = useState({
    loanAccountNumber: '',
    paymentType: 'checking',
    routingNumber: '',
    bankAccountNumber: '',
    confirmBankAccountNumber: '',
  });

  const [previewImage, setPreviewImage] = useState('checking');
  const [errorMsg, setErrorMsg] = useState('');


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    if(event.target.name === 'paymentType') setPreviewImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data and submit to backend
    if(validateData(formData)){
      // If we reached here, means the validation was complete and now we should be able to make a post request to Back end for processing
    }
  };

  const validateData = (data) => {
    console.log(data);
    let errMsg = '';
    if(data.paymentType === 'checking') {
      if(!validateRoutingNumber(data.routingNumber)) errMsg = 'Invalid routing number. Please try again';
    }else if(data.paymentType === 'debitCard') {
      if(!validateCVV(data.cvv)) errMsg = 'Invalid cvv number. Please try again';
    }
    setErrorMsg(errMsg);
  };

  return (
    <div className="container">
       <div className='row'>
       <div className="col-12 padL0"><h1>One-time Loan Payment</h1></div>
       <div className="col-12 padL0"><p className="subHeader">Fill out the form below to complete your payment.</p></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row formContainer'>
            <div className="col-12 formRow">
                <div className='row firstRow'>
                  <label htmlFor="loanAccountNumber">Loan Account Number</label>
                  <TextField
                    type="number"
                    id="loanAccountNumber"
                    name="loanAccountNumber"
                    value={formData.loanAccountNumber}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="filled"
                  />
                </div>
            </div>
            <div className="col-7">
                <div className='row formRow'>
                  <div className="col-12">
                    <label htmlFor="paymentType" className="paymentType padL0">Type of Account</label>
                  </div> 
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="radio"
                          id="checking"
                          name="paymentType"
                          value="checking"
                          checked={formData.paymentType === 'checking'}
                          onChange={handleChange}
                        />
                        <label htmlFor="checking">Checking</label>
                      </div>
                      <div className="col-6">
                        <input
                          type="radio"
                          id="debitCard"
                          name="paymentType"
                          value="debitCard"
                          checked={formData.paymentType === 'debitCard'}
                          onChange={handleChange}
                        />
                        <label htmlFor="debitCard">Debit Card</label>
                      </div>
                    </div>
                  </div>
                </div>
                {(formData.paymentType === 'checking') && 
                  <>
                    <div className='row formRow'>
                      <label htmlFor="routingNumber">Routing Number</label>
                      <TextField
                        type="number"
                        id="routingNumber"
                        name="routingNumber"
                        value={formData.routingNumber}
                        onChange={handleChange}
                        required
                        variant="filled"
                        fullWidth
                      />
                    </div>
                    <div className='row formRow'>
                      <label htmlFor="bankAccountNumber">Bank Account Number</label>
                      <TextField
                        type="number"
                        id="bankAccountNumber"
                        name="bankAccountNumber"
                        value={formData.bankAccountNumber}
                        onChange={handleChange}
                        required
                        variant="filled"
                        fullWidth
                      />
                    </div>
                    <div className='row formRow'>
                      <label htmlFor="confirmBankAccountNumber">Confirm Bank Account Number</label>
                      <TextField
                        type="number"
                        id="confirmBankAccountNumber"
                        name="confirmBankAccountNumber"
                        value={formData.confirmBankAccountNumber}
                        onChange={handleChange}
                        required
                        variant="filled"
                        fullWidth
                      />
                    </div>      
                  </>
                }
                {(formData.paymentType === 'debitCard') && 
                  <>
                    <div className='row formRow'>
                      <label htmlFor="cardNumber">Card Number</label>
                      <TextField
                        type="number"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        variant="filled"
                        fullWidth
                      />
                    </div>
                    <div className='row formRow'>
                      <label htmlFor="cardHolderName">Name on Card</label>
                      <TextField
                        type="text"
                        id="cardHolderName"
                        name="cardHolderName"
                        value={formData.cardHolderName}
                        onChange={handleChange}
                        required
                        variant="filled"
                        fullWidth
                      />
                    </div>
                    <div className='row formRow'>
                      <div className="col-6">
                        <label htmlFor="expiryDate" className="expiryDate padL0">Expiration Date</label>
                        <TextField
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          required
                          variant="filled"
                          fullWidth
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="cvv">CVV</label>
                        <TextField
                          type="number"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          variant="filled"
                          fullWidth
                        />
                      </div>
                    </div>      
                  </>
                }
            </div>
            <div className="col-5 colRight">
              <div className="row previewImage">
                <img src={previewImage === 'checking' ? '/check.png' : '/card.png'} alt={previewImage}/>
              </div>
            </div>
        </div>
        <Button type="submit" className="btn submitBtn">MAKE PAYMENT</Button>   
        <p className="errorMsg">{errorMsg}  </p>
      </form>
    </div>
  );
};

export default OneTimePaymentForm;