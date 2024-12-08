export const validateCVV = (cvv) => {
    // Check if the CVV is 3 digits
    const regex = /^[0-9]{3}$/; 
    return regex.test(cvv);
};

export const validateRoutingNumber = (routingNumber) => {
  const regex = /^\d{9}$/;
  return regex.test(routingNumber);
};