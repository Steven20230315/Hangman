import wordList from '../data/wordList.json' with { type: 'json'};
import { Categories } from '../data/wordListCategory.js';
// export type Categories =
// 	| 'animal'
// 	| 'body'
// 	| 'fruit'
// 	| 'science'
// 	| 'emotion'
// 	| 'nature'
// 	| 'color'
// 	| 'travel'
// 	| 'random';


// TODO: 
export const selectWordsByCategory = (category: Categories): string[] => {
	if (category === 'random') {
		const list = [];
		for (const value of Object.values(wordList)) {
			list.push(...value);
		}
		return list;
	} else {
		return wordList[category];
	}
};
