export default function PhoneMask(value){
    console.log(value)
    return value
     .replace(/\D/g,"")  // Replaces any character that is not a number with ""
     .replace(/^(\d{2})(\d)/g,"($1) $2") // First 2 digits are in brackets
     .replace(/(\d)(\d{4})$/,"$1-$2")    //Divides the first side and the second side of the phone by a -
}