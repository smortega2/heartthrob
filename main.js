var atts = [];//["test0", "test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11"]
var numGuys = 221;//221;
var state = 0;


function getGuys(){
	var inds = chance.unique(chance.natural, 3, {min: 0, max: numGuys-1});

	updateImages(inds[0], inds[1], inds[2]);
}

function updateImages(firstInd, secondInd, thirdInd){
	console.log(firstInd);
	console.log(secondInd);
	console.log(thirdInd);

	document.getElementById("Guy1").src=image_urls[firstInd];
	document.getElementById("Guy2").src=image_urls[secondInd];
	document.getElementById("Guy3").src=image_urls[thirdInd];
}

function addAttributes(){
	if(state == 0){ // initial state -> add 2 attributes
		addFirstAttributes();
	} else if (state == 1){ // two attributes -> add 2 attributes
		addSecondAttributes();
	}
}

function addFirstAttributes(){
	getAttributes(); //get attributes from list
	updateAttributes("Guy1Att1","Guy1Att2","Guy2Att1","Guy2Att2","Guy3Att1","Guy3Att2", 0,1,4,5,8,9); // update text fields
	state = 1; // update state
}

function updateAttributes(id0,id1,id2,id3,id4,id5, idx0, idx1, idx2, idx3, idx4, idx5){
	document.getElementById(id0).innerHTML = atts[idx0];
	document.getElementById(id1).innerHTML = atts[idx1];
	document.getElementById(id2).innerHTML = atts[idx2];
	document.getElementById(id3).innerHTML = atts[idx3];
	document.getElementById(id4).innerHTML = atts[idx4];
	document.getElementById(id5).innerHTML = atts[idx5];
}

function addSecondAttributes(){
	updateAttributes("Guy1Att3","Guy1Att4","Guy2Att3","Guy2Att4","Guy3Att3","Guy3Att4", 2,3,6,7,10,11); // update text fields
	state = 2; //update state
}

function getAttributes(){
	// generate 12 random, unique indices
	// use them to index into attributes file
	// put attributes in atts list

	getAttributesForOneGuy();
	getAttributesForOneGuy();
	getAttributesForOneGuy();

	console.log(atts);
	
}

function getAttributesForOneGuy(){
	var score = -10;
	var attribute_text = [];

	while(Math.abs(score) > 2){
		var inds = chance.unique(chance.natural, 4, {min: 0, max: attributes.length-1});
		var attribute_slice = inds.map(i => attributes[i]);
		var attribute_scores = attribute_slice.map(function(value,index) { return value[1]; });
		attribute_text = attribute_slice.map(function(value,index) { return value[0]; });
		score = attribute_scores.reduce(function(a, b) { return a + b; }, 0);
	}

	console.log('score ' + score);

	inds.sort(function(a, b){return b - a});
	for(var i = 0; i < 4; i++){
		atts.push(attribute_text[i]);
		attributes.splice(inds[i],1);
	}
}


















