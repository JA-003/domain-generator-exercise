let pronoun = ['the','our'];
let adj = ['great', 'big', 'last' ];
let noun = ['jogger','racoon', 'of'];
let extensions = ['.com', '.net', '.us', '.io'];

function generateDomainName(array1, array2, array3, array4) {
	for (string1 in array1) {
		for (string2 in array2) {
			for (string3 in array3) {
				for (string4 in array4) {
					console.log(array1[string1] + array2[string2] + array3[string3] + array4[string4]);
				}
			}
		}
	}
}

generateDomainName(pronoun, adj, noun, extensions);