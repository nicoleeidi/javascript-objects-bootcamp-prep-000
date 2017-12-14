const playlist={
  artist:"song"
}

function updatePlaylist(obj,key,value){
  var newObj= Object.assign({}, playlist, { [key]: value })
  return newObj
}
function removeFromPlaylist(obj,key){
  delete obj[key]
  return obj
}
