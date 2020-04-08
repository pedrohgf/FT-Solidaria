export default function ZipCodeMask(value){
    return value
      .replace(/\D/g, '') // Replaces any character that is not a number with ""
      .replace(/(\d)(\d{3})$/,"$1-$2") //Divides the first side and the second side of the ZIP by a -
}