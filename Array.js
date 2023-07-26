
function mergeArray(_firstArray,_secondArray){
	
	var resultArray = [...new Set([..._firstArray ,..._secondArray])];
	
	resultArray.sort(function(a,b){
		return a - b;
	});
	
	return resultArray;
}
console.log("----Test 1---");
console.log(mergeArray([1,2,3],[3,4,5]));
console.log("----Test 2----");
console.log(mergeArray([1,22,333,42],[-11,5,22,41,42]));
