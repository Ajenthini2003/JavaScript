
function hidingDigits(input) {
  const digits = String(input).replace(/\D/g, '');
  if (digits.length < 4) {
     return "Input must contain at least 4 digits"
  }

  const maskCount = Math.max(0, digits.length - 4);        
  const masked = '*'.repeat(maskCount) + digits.slice(maskCount);

  
  const groups = masked.match(/.{1,4}/g) || [];
  return groups.join('-');
}

// Tests
console.log(hidingDigits('2132-3454-4567-1212')); 
      console.log(hidingDigits('345'));

     