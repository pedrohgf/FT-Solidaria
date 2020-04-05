export default function InstagramMask(value){
    return value
      .replace(/^(\w)/,"@$1")
}