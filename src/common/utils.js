let utils = {
  without(array,value){
    if(array.indexOf(value) === -1){
      return array;
    }else{
      return array.filter(item=>{
        return item !== value;
      });
    }
  }
}

export default utils;
