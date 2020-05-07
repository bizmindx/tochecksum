const tochecksum = require('../dist/index');

let addr = '0xce8c4e18d4aa3a6bd66365bb45f738e25cc2327f';

let checksumAddr = tochecksum.toChecksumAddress(addr);
// const convToYpub = pub.pubToYpub(xpub);
console.log({addr, checksumAddr});
// const convToZpub = pub.pubToZpub(xpub);
// console.log(convToZpub);
// console.log(convToYpub);
