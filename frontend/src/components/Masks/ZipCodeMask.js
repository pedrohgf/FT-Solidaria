export default function ZipCodeMask(value){
    return value
      .replace(/\D/g, '') // Replaces any character that is not a number with ""
      .replace(/(\d{5})/, '$1-') // Captures 5 characters and puts a '-'
      .replace(/(-\d{3})\d+?$/, '$1') // After 3 more characters typed, it stops reading any more chars.
}