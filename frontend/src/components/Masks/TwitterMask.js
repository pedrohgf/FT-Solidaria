export default function TwitterMask(value){
    return value
      .replace(/^(\w)/,"@$1")
}