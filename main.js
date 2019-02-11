var atts = [];//["test0", "test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11"]
var numGuys = 152;
var numAttributes = 112;
var state = 0;


function getGuys(){
	var inds = chance.unique(chance.natural, 3, {min: 0, max: numGuys-1});

	updateImages(inds[0], inds[1], inds[2]);
}

function updateImages(firstInd, secondInd, thirdInd){
	var im1 = "imgs/guy" + firstInd + ".jpg";
	var im2 = "imgs/guy" + secondInd + ".jpg";
	var im3 = "imgs/guy" + thirdInd + ".jpg";

	console.log(im1);
	console.log(im2);
	console.log(im3);

	document.getElementById("Guy1").src=im1;
	document.getElementById("Guy2").src=im2;
	document.getElementById("Guy3").src=im3;
}

function addAttributes(){
	if(state == 0){ // initial state -> add 2 attributes
		addFirstAttributes();
	} else if (state == 1){ // two attributes -> add 2 attributes
		addSecondAttributes();
	}
}

function addFirstAttributes(){
	//get attributes from list
	getAttributes();
	// update text fields
	updateAttributes("Guy1Att1","Guy2Att1","Guy3Att1","Guy1Att2","Guy2Att2","Guy3Att2", 0,1,2,3,4,5);
	// update state
	state = 1;
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
	// update text fields
	updateAttributes("Guy1Att3","Guy2Att3","Guy3Att3","Guy1Att4","Guy2Att4","Guy3Att4", 6,7,8,9,10,11);
	//update state
	state = 2;
}

function getAttributes(){

	var inds = chance.unique(chance.natural, 12, {min: 0, max: numAttributes-1});
	for(var i = 0; i < 12; i++){
		atts.push(allAttributes[inds[i]]);
	}
	console.log(atts);
	// generate 12 random, unique indices
	// use them to index into attributes file
	// put attributes in atts list
}




















