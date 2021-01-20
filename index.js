const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superbowls) {
  let winRecord = superbowls.find(superbowl => {return superbowl.result === "W"})
  if(typeof winRecord != "undefined")
    return winRecord.year
}