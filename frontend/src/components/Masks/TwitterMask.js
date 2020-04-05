export default function TwitterMask(value){
    return value
      //.replace(/@/g, '')
      .replace(/^(\w)/,"@$1")
}