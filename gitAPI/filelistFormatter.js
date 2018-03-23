
module.exports = function (stdout) {
  let branchTree = stdout.split(/\n\s*/).filter((brName) => brName !== '');
  return branchTree.map(item => {
    let separated = item.split('\t');
    let separatedMore = separated[0].split(' ');
    let itemObj = {};
    itemObj.type = separatedMore[1];
    itemObj.hash = separatedMore[2];
    itemObj.filename = separated[1];
    return itemObj;
  });
};