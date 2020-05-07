import createKeccakHash from 'keccak';

export const toChecksumAddress = (address) => {
	address = address.toLowerCase().replace('0x', '');
	let hash = createKeccakHash('keccak256').update(address).digest('hex');
	let ret = '0x';

	for (let i = 0; i < address.length; i++) {
	  if (parseInt(hash[i], 16) >= 8) {
			ret += address[i].toUpperCase();
	  } else {
			ret += address[i];
	  }
	}

	return ret;
};
