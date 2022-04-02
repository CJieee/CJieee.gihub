function clarify(n){
  if(n)
  return CreateRandomNumber()
}
 function RowCalculate(dir){
  let count = 0
  let j = 0,next =0
  for(let i=0;i<4;i++){
    for(let z=0;z<3;z++){
      if(dir){
        j = z
        next = j+1
      }else{
        j = 3-z
        next = j-1
      }
      if(data[i][j] && data[i][j]===data[i][next]){
        data[i][j] *= 2
        data[i][next] = 0
        z++
        count = count ? count:1;
      }
    }
  }
  return count
}
 function ColumnCalculate(dir){
  let count = 0
  let i = 0,next =0
  for(let j=0;j<4;i++){
    for(let z=0;z<3;z++){
      if(dir){
        i = z
        next = i+1
      }else{
        i = 3-z
        next = i-1
      }
      if(data[i][j] && data[i][j]===data[next][j]){
        data[i][j] *= 2
        data[next][j] = 0
        z++
        count = count ? count:1;
      }
    }
  }
  return count
}
            
 function RowMove(dir){
  let ct = RowCalculate(dir)
  let j = 0,next =0
  for(let i=0;i<4;i++){
    for(let z=0;z<3;z++){
      if(dir){
        j = z
        next = j+1
      }else{
        j = 3-z
        next = j-1
      }
      if(!data[i][j] && data[i][next]){
        data[i][j] = data[i][next]
        data[i][next] = 0
      }
    }
  }
  clarify(ct)
}
 function ColumnMove(dir){
  let ct = ColumnCalculate(dir)
  let i = 0,next =0
  for(let j=0;j<4;i++){
    for(let z=0;z<3;z++){
      if(dir){
        i = z
        next = i+1
      }else{
        i = 3-z
        next = i-1
      }
      if(!data[i][j] && data[next][j]){
        data[i][j] = data[next][j]
        data[next][j] = 0
      }
    }
  }
  clarify(ct)
}