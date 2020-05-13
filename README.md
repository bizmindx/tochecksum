# tochecksum
Convert Ethereum Address to checksum Address
```
npm i tochecksum
```
## usage

```
const conv = require('tochecksum');

//ES6
import {toChecksumAddress} from 'tochecksum';

let addr = '0xce8c4e18d4aa3a6bd66365bb45f738e25cc2327f';

let checksumAddr = toChecksumAddress(addr);

console.log({addr, checksumAddr});

```
