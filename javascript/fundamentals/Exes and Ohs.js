function XO(str) {
    const lowStr = str.toLowerCase()
    console.log(lowStr)
    let xCount = 0
    let oCount = 0
    for(const i of lowStr){
        if(i == "x")
            xCount ++;
        if(i == "o")
            oCount ++;
    }
    if(xCount || oCount){
      if(xCount == oCount)
        return true
      else
        return false
    }else
      return true
  }
