/**************
 *  VARIABLES *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreNombres = document.getElementById('titre-nombres');
const background = document.getElementById('back');
const couleurs = document.getElementById('couleurs').addEventListener('change', ($event) => {
			if ($event.target.value == "blanc_noir") {				
				background.setAttribute("style", "background-color: black; color: white");
			} else if ($event.target.value == "noir_blanc") {				
				background.setAttribute("style", "background-color: white; color: black");
			} else if ($event.target.value == "jaune_noir") {				
				background.setAttribute("style", "background-color: black; color: yellow");
			} else if ($event.target.value == "violet_blanc") {				
				background.setAttribute("style", "background-color: white; color: purple");
			} else if ($event.target.value == "black_cyan") {				
				background.setAttribute("style", "background-color: cyan; color: black");
			} else if ($event.target.value == "black_yellow") {				
				background.setAttribute("style", "background-color: yellow; color: black");
			} else if ($event.target.value == "white_blue") {				
				background.setAttribute("style", "background-color: blue; color: white");
			} else if ($event.target.value == "black_thalo_yellow_green") {				
				background.setAttribute("style", "background-color: #99FF99; color: black");
			} else if ($event.target.value == "lime_black") {				
				background.setAttribute("style", "background-color: black; color: lime");
			}
		});

/************
 *  CHAINES *
 ************/
 
var unites = [];
var dizaines = [];
var centaines = [];

var unitesMille = [];
var dizainesMille = [];
var centainesMille = [];

var unitesMillion = [];
var dizainesMillion = [];
var centainesMillion = [];

var unitesMilliard = [];
var dizainesMilliard = [];
var centainesMilliard = [];

var baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
var baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
var baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];

var baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
var baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
var baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];

var baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
var baseDizainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizainesMillion = ['zero-dix-million', 'un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
var baseCentainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentainesMillion = ['zero-cent-million', 'un-cent-million', 'deux-cent-million', 'trois-cent-million', 'quatre-cent-million', 'cinq-cent-million', 'six-cent-million', 'sept-cent-million', 'huit-cent-million', 'neuf-cent-million'];

var baseUnitesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnitesMilliard = ['zero-milliard', 'un-milliard', 'deux-milliard', 'trois-milliard', 'quatre-milliard', 'cinq-milliard', 'six-milliard', 'sept-milliard', 'huit-milliard', 'neuf-milliard'];
var baseDizainesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizainesMilliard = ['zero-dix-milliard', 'un-dix-milliard', 'deux-dix-milliard', 'trois-dix-milliard', 'quatre-dix-milliard', 'cinq-dix-milliard', 'six-dix-milliard', 'sept-dix-milliard', 'huit-dix-milliard', 'neuf-dix-milliard'];
var baseCentainesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentainesMilliard = ['zero-cent-milliard', 'un-cent-milliard', 'deux-cent-milliard', 'trois-cent-milliard', 'quatre-cent-milliard', 'cinq-cent-milliard', 'six-cent-milliard', 'sept-cent-milliard', 'huit-cent-milliard', 'neuf-cent-milliard'];


/***************************************
* FONCTION DE CREATION DE CONTENU HTML *
****************************************/
function createNewInput (baseId, base, letterRow, name) {
	for (let i=0; i<base.length; i++) {
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		newInput.id = baseId[i];
		newInput.name = name;
		var newLabel = document.createElement('label');
		newLabel.htmlFor = baseId[i];
		newLabel.appendChild(document.createTextNode(base[i]));
		document.getElementById(letterRow).appendChild(newInput);
		document.getElementById(letterRow).appendChild(newLabel);
	}	
}

createNewInput(baseIdUnites, baseUnites, 'form-group-unites', 'units');
createNewInput(baseIdDizaines, baseDizaines, 'form-group-dizaines', 'tens');
createNewInput(baseIdCentaines, baseCentaines, 'form-group-centaines', 'hundreds');

createNewInput(baseIdUnitesMille, baseUnitesMille, 'form-group-unites-mille', 'thousand');
createNewInput(baseIdDizainesMille, baseDizainesMillion, 'form-group-dizaines-mille', 'ten-thousand');
createNewInput(baseIdCentainesMille, baseCentainesMille, 'form-group-centaines-mille', 'hundred-thousand');

createNewInput(baseIdUnitesMillion, baseUnitesMillion, 'form-group-unites-million', 'million');
createNewInput(baseIdDizainesMillion, baseDizainesMillion, 'form-group-dizaines-million', 'ten-million');
createNewInput(baseIdCentainesMillion, baseCentainesMillion, 'form-group-centaines-million', 'hundred-million');

createNewInput(baseIdUnitesMilliard, baseUnitesMilliard, 'form-group-unites-milliard', 'billion');
createNewInput(baseIdDizainesMilliard, baseDizainesMilliard, 'form-group-dizaines-milliard', 'ten-billion');
createNewInput(baseIdCentainesMilliard, baseCentainesMilliard, 'form-group-centaines-milliard', 'hundred-billion');

/*********************************************
 *  FONCTION DE SELECTION DES CASES À COCHER *
 *********************************************/
 
function select (base, baseId, unit) {
	for (let i=0; i<base.length; i++) {
		const x = document.getElementById(baseId[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				unit.push(base[i]);
			} else {
				const index = unit.indexOf(base[i]);
				unit.splice(index, 1);}
		});
	}
}

select(baseUnites, baseIdUnites, unites);
select(baseDizaines, baseIdDizaines, dizaines);
select(baseCentaines, baseIdCentaines, centaines);

select(baseUnitesMille, baseIdUnitesMille, unitesMille);
select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
select(baseCentainesMille, baseIdCentainesMille, centainesMille);

select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
select(baseDizainesMillion, baseIdDizainesMillion, dizainesMillion);
select(baseCentainesMillion, baseIdCentainesMillion, centainesMillion);

select(baseUnitesMilliard, baseIdUnitesMilliard, unitesMilliard);
select(baseDizainesMilliard, baseIdDizainesMilliard, dizainesMilliard);
select(baseCentainesMilliard, baseIdCentainesMilliard, centainesMilliard);

function changeCheckbox (base1, base1Id, base2, base2Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
}

function changeCheckboxCE1 (base1, base1Id, base2, base2Id, base3, base3Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
}

function changeCheckboxCM (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
}

function changeCheckbox5 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
}

function changeCheckbox6 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
}

function changeCheckbox7 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id, base7, base7Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
	for (let i=0; i<base7Id.length; i++) {
		const x = document.getElementById(base7Id[i]);
		x.checked = true;
		unitesMillion.push(base7[i]);
	}
}

function changeCheckbox8 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id, base7, base7Id, base8, base8Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
	for (let i=0; i<base7Id.length; i++) {
		const x = document.getElementById(base7Id[i]);
		x.checked = true;
		unitesMillion.push(base7[i]);
	}
	for (let i=0; i<base8Id.length; i++) {
		const x = document.getElementById(base8Id[i]);
		x.checked = true;
		dizainesMillion.push(base8[i]);
	}
}

function changeCheckbox9 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id, base7, base7Id, base8, base8Id, base9, base9Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
	for (let i=0; i<base7Id.length; i++) {
		const x = document.getElementById(base7Id[i]);
		x.checked = true;
		unitesMillion.push(base7[i]);
	}
	for (let i=0; i<base8Id.length; i++) {
		const x = document.getElementById(base8Id[i]);
		x.checked = true;
		dizainesMillion.push(base8[i]);
	}
	for (let i=0; i<base9Id.length; i++) {
		const x = document.getElementById(base9Id[i]);
		x.checked = true;
		centainesMillion.push(base9[i]);
	}
}

function changeCheckbox10 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id, base7, base7Id, base8, base8Id, base9, base9Id, base10, base10Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
	for (let i=0; i<base7Id.length; i++) {
		const x = document.getElementById(base7Id[i]);
		x.checked = true;
		unitesMillion.push(base7[i]);
	}
	for (let i=0; i<base8Id.length; i++) {
		const x = document.getElementById(base8Id[i]);
		x.checked = true;
		dizainesMillion.push(base8[i]);
	}
	for (let i=0; i<base9Id.length; i++) {
		const x = document.getElementById(base9Id[i]);
		x.checked = true;
		centainesMillion.push(base9[i]);
	}
	for (let i=0; i<base10Id.length; i++) {
		const x = document.getElementById(base10Id[i]);
		x.checked = true;
		unitesMilliard.push(base10[i]);
	}
}

function changeCheckbox11 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id, base7, base7Id, base8, base8Id, base9, base9Id, base10, base10Id, base11, base11Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
	for (let i=0; i<base7Id.length; i++) {
		const x = document.getElementById(base7Id[i]);
		x.checked = true;
		unitesMillion.push(base7[i]);
	}
	for (let i=0; i<base8Id.length; i++) {
		const x = document.getElementById(base8Id[i]);
		x.checked = true;
		dizainesMillion.push(base8[i]);
	}
	for (let i=0; i<base9Id.length; i++) {
		const x = document.getElementById(base9Id[i]);
		x.checked = true;
		centainesMillion.push(base9[i]);
	}
	for (let i=0; i<base10Id.length; i++) {
		const x = document.getElementById(base10Id[i]);
		x.checked = true;
		unitesMilliard.push(base10[i]);
	}
	for (let i=0; i<base11Id.length; i++) {
		const x = document.getElementById(base11Id[i]);
		x.checked = true;
		dizainesMilliard.push(base11[i]);
	}
}

function changeCheckbox12 (base1, base1Id, base2, base2Id, base3, base3Id, base4, base4Id, base5, base5Id, base6, base6Id, base7, base7Id, base8, base8Id, base9, base9Id, base10, base10Id, base11, base11Id, base12, base12Id) {
	reset();
	for (let i=0; i<base1Id.length; i++) {
		const x = document.getElementById(base1Id[i]);
		x.checked = true;
		unites.push(base1[i]);
	}
	for (let i=0; i<base2Id.length; i++) {
		const x = document.getElementById(base2Id[i]);
		x.checked = true;
		dizaines.push(base2[i]);
	}
	for (let i=0; i<base3Id.length; i++) {
		const x = document.getElementById(base3Id[i]);
		x.checked = true;
		centaines.push(base3[i]);
	}
	for (let i=0; i<base4Id.length; i++) {
		const x = document.getElementById(base4Id[i]);
		x.checked = true;
		unitesMille.push(base4[i]);
	}
	for (let i=0; i<base5Id.length; i++) {
		const x = document.getElementById(base5Id[i]);
		x.checked = true;
		dizainesMille.push(base5[i]);
	}
	for (let i=0; i<base6Id.length; i++) {
		const x = document.getElementById(base6Id[i]);
		x.checked = true;
		centainesMille.push(base6[i]);
	}
	for (let i=0; i<base7Id.length; i++) {
		const x = document.getElementById(base7Id[i]);
		x.checked = true;
		unitesMillion.push(base7[i]);
	}
	for (let i=0; i<base8Id.length; i++) {
		const x = document.getElementById(base8Id[i]);
		x.checked = true;
		dizainesMillion.push(base8[i]);
	}
	for (let i=0; i<base9Id.length; i++) {
		const x = document.getElementById(base9Id[i]);
		x.checked = true;
		centainesMillion.push(base9[i]);
	}
	for (let i=0; i<base10Id.length; i++) {
		const x = document.getElementById(base10Id[i]);
		x.checked = true;
		unitesMilliard.push(base10[i]);
	}
	for (let i=0; i<base11Id.length; i++) {
		const x = document.getElementById(base11Id[i]);
		x.checked = true;
		dizainesMilliard.push(base11[i]);
	}
	for (let i=0; i<base12Id.length; i++) {
		const x = document.getElementById(base12Id[i]);
		x.checked = true;
		centainesMilliard.push(base12[i]);
	}
}

function filingBases () {
	baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
	baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
	baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];
	
	baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
	baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
	baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];

	baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
	baseDizainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdDizainesMillion = ['zero-dix-million', 'un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
	baseCentainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdCentainesMillion = ['zero-cent-million', 'un-cent-million', 'deux-cent-million', 'trois-cent-million', 'quatre-cent-million', 'cinq-cent-million', 'six-cent-million', 'sept-cent-million', 'huit-cent-million', 'neuf-cent-million'];

	baseUnitesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdUnitesMilliard = ['zero-milliard', 'un-milliard', 'deux-milliard', 'trois-milliard', 'quatre-milliard', 'cinq-milliard', 'six-milliard', 'sept-milliard', 'huit-milliard', 'neuf-milliard'];
	baseDizainesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdDizainesMilliard = ['zero-dix-milliard', 'un-dix-milliard', 'deux-dix-milliard', 'trois-dix-milliard', 'quatre-dix-milliard', 'cinq-dix-milliard', 'six-dix-milliard', 'sept-dix-milliard', 'huit-dix-milliard', 'neuf-dix-milliard'];
	baseCentainesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	baseIdCentainesMilliard = ['zero-cent-milliard', 'un-cent-milliard', 'deux-cent-milliard', 'trois-cent-milliard', 'quatre-cent-milliard', 'cinq-cent-milliard', 'six-cent-milliard', 'sept-cent-milliard', 'huit-cent-milliard', 'neuf-cent-milliard'];
	}

function progressionDizaines () {
	changeCheckbox(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	melangerDeuxChiffres(unites, dizaines, affichageMelange);
	filingBases ();
	}

function progressionCentaines () {
	changeCheckboxCE1(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	melangerTroisChiffres(unites, dizaines, centaines, affichageMelange);
	filingBases ();
	}

function progressionMille () {
	changeCheckboxCM(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	melangerQuatreChiffres(unites, dizaines, centaines, unitesMille, affichageMelange);
	filingBases ();
	}

function progressionDixMille () {
	changeCheckbox5(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	melangerCinqChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, affichageMelange);
	filingBases ();
	}

function progressionCentMille () {
	changeCheckbox6(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	melangerSixChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, affichageMelange);
	filingBases ();
	}

function progressionUniteMillion () {
	changeCheckbox7(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille, baseUnitesMillion, baseIdUnitesMillion);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
	melangerSeptChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, unitesMillion, affichageMelange);
	filingBases ();
	}

function progressionDizaineMillion () {
	changeCheckbox8(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille, baseUnitesMillion, baseIdUnitesMillion, baseDizainesMillion, baseIdDizainesMillion);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
	select(baseDizainesMillion, baseIdDizainesMillion, dizainesMillion);
	melangerHuitChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, unitesMillion, dizainesMillion, affichageMelange);
	filingBases ();
	}

function progressionCentaineMillion () {
	changeCheckbox9(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille, baseUnitesMillion, baseIdUnitesMillion, baseDizainesMillion, baseIdDizainesMillion, baseCentainesMillion, baseIdCentainesMillion);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
	select(baseDizainesMillion, baseIdDizainesMillion, dizainesMillion);
	select(baseCentainesMillion, baseIdCentainesMillion, centainesMillion);
	melangerNeufChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, unitesMillion, dizainesMillion, centainesMillion, affichageMelange);
	filingBases ();
	}

function progressionUniteMilliard () {
	changeCheckbox10(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille, baseUnitesMillion, baseIdUnitesMillion, baseDizainesMillion, baseIdDizainesMillion, baseCentainesMillion, baseIdCentainesMillion, baseUnitesMilliard, baseIdUnitesMilliard);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
	select(baseDizainesMillion, baseIdDizainesMillion, dizainesMillion);
	select(baseCentainesMillion, baseIdCentainesMillion, centainesMillion);
	select(baseUnitesMilliard, baseIdUnitesMilliard, unitesMilliard);
	melangerDixChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, unitesMillion, dizainesMillion, centainesMillion, unitesMilliard, affichageMelange);
	filingBases ();
	}

function progressionDizaineMilliard () {
	changeCheckbox11(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille, baseUnitesMillion, baseIdUnitesMillion, baseDizainesMillion, baseIdDizainesMillion, baseCentainesMillion, baseIdCentainesMillion, baseUnitesMilliard, baseIdUnitesMilliard, baseDizainesMilliard, baseIdDizainesMilliard);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
	select(baseDizainesMillion, baseIdDizainesMillion, dizainesMillion);
	select(baseCentainesMillion, baseIdCentainesMillion, centainesMillion);
	select(baseUnitesMilliard, baseIdUnitesMilliard, unitesMilliard);
	select(baseDizainesMilliard, baseIdDizainesMilliard, dizainesMilliard);
	melangerOnzeChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, unitesMillion, dizainesMillion, centainesMillion, unitesMilliard, dizainesMilliard, affichageMelange);
	filingBases ();
	}

function progressionCentaineMilliard () {
	changeCheckbox12(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines, baseCentaines, baseIdCentaines, baseUnitesMille, baseIdUnitesMille, baseDizainesMille, baseIdDizainesMille, baseCentainesMille, baseIdCentainesMille, baseUnitesMillion, baseIdUnitesMillion, baseDizainesMillion, baseIdDizainesMillion, baseCentainesMillion, baseIdCentainesMillion, baseUnitesMilliard, baseIdUnitesMilliard, baseDizainesMilliard, baseIdDizainesMilliard, baseCentainesMilliard, baseIdCentainesMilliard);
	select(baseUnites, baseIdUnites, unites);
	select(baseDizaines, baseIdDizaines, dizaines);
	select(baseCentaines, baseIdCentaines, centaines);
	select(baseUnitesMille, baseIdUnitesMille, unitesMille);
	select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
	select(baseCentainesMille, baseIdCentainesMille, centainesMille);
	select(baseUnitesMillion, baseIdUnitesMillion, unitesMillion);
	select(baseDizainesMillion, baseIdDizainesMillion, dizainesMillion);
	select(baseCentainesMillion, baseIdCentainesMillion, centainesMillion);
	select(baseUnitesMilliard, baseIdUnitesMilliard, unitesMilliard);
	select(baseDizainesMilliard, baseIdDizainesMilliard, dizainesMilliard);
	select(baseCentainesMilliard, baseIdCentainesMilliard, centainesMilliard);
	melangerDouzeChiffres(unites, dizaines, centaines, unitesMille, dizainesMille, centainesMille, unitesMillion, dizainesMillion, centainesMillion, unitesMilliard, dizainesMilliard, centainesMilliard, affichageMelange);
	filingBases ();
	}

const selectionNiveauCP = document.getElementById('progressionCP').addEventListener('change', ($event) => {
	switch ($event.target.value) {
		case 'progCP':
			reset();
			break;
		case 'unites':			
			baseIdDizaines = [];
			changeCheckbox(baseUnites, baseIdUnites, baseDizaines, baseIdDizaines);
			select(baseUnites, baseIdUnites, unites);
			melangerUnChiffre(unites, affichageMelange)
			break;
		case 'dixtreize':
			baseIdDizaines = ['dix'];
			baseDizaines = ['1'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois'];
			baseUnites = ['0', '1', '2', '3'];
			progressionDizaines();
			break;
		case 'dixseize':
			baseIdDizaines = ['dix'];
			baseDizaines = ['1'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six'];
			baseUnites = ['0', '1', '2', '3', '4', '5', '6'];
			progressionDizaines();
			break;
		case 'quatorzeseize':
			baseIdDizaines = ['dix'];
			baseDizaines = ['1'];
			baseIdUnites = ['quatre', 'cinq', 'six'];
			baseUnites = ['4', '5', '6'];
			progressionDizaines();
			break;
		case 'dix':
			baseIdDizaines = ['dix'];
			baseDizaines = ['1'];
			progressionDizaines();
			break;
		case 'vingt':
			baseIdDizaines = ['vingt'];
			baseDizaines = ['2'];
			progressionDizaines();
			break;
		case 'trente':
			baseIdDizaines = ['trente'];
			baseDizaines = ['3'];
			progressionDizaines();
			break;
		case '0123':
			baseIdDizaines = ['dix', 'vingt', 'trente'];
			baseDizaines = ['1', '2', '3'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois'];
			baseUnites = ['0', '1', '2', '3'];
			progressionDizaines();
			break;
		case 'quarante':
			baseIdDizaines = ['quarante'];
			baseDizaines = ['4'];
			progressionDizaines();
			break;
		case 'cinquante':
			baseIdDizaines = ['cinquante'];
			baseDizaines = ['5'];
			progressionDizaines();
			break;
		case '012345u':
			baseIdDizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante'];
			baseDizaines = ['1', '2', '3', '4', '5'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq'];
			baseUnites = ['0', '1', '2', '3', '4', '5'];
			progressionDizaines();
			break;
		case 'soixante':
			baseIdDizaines = ['soixante'];
			baseDizaines = ['6'];
			progressionDizaines();
			break;
		case 'soixanteDix':
			baseIdDizaines = ['soixante-dix'];
			baseDizaines = ['7'];
			progressionDizaines();
			break;
		case '01234567u':
			baseIdDizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix'];
			baseDizaines = ['1', '2', '3', '4', '5', '6', '7'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept'];
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7'];
			progressionDizaines();
			break;
		case 'quatreVingt':
			baseIdDizaines = ['quatre-vingts'];
			baseDizaines = ['8'];
			progressionDizaines();
			break;
		case 'quatreVingtDix':
			baseIdDizaines = ['quatre-vingt-dix'];
			baseDizaines = ['9'];
			progressionDizaines();
			break;	
		case 'vingtSoixanteNeuf':
			baseIdDizaines = ['vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
			baseDizaines = ['2', '3', '4', '5', '6'];
			progressionDizaines();
			break;
		case 'soixanteQuatreVingtDixNeuf':
			baseIdDizaines = ['soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseDizaines = ['6', '7', '8', '9'];
			progressionDizaines();
			break;
		case '0123456789u':
			baseIdDizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseDizaines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			progressionDizaines();
			break;
		}
	});
	
const selectionNiveauCE = document.getElementById('progressionCE').addEventListener('change', ($event) => {
	switch ($event.target.value) {
		case 'progCE':
			reset();
			break;
		case '10_99':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];			
			progressionDizaines();
			break;
		case 'centaines':
			baseUnites = ['0'];
			baseIdUnites = ['zero'];
			baseDizaines = ['0'];
			baseIdDizaines = ['zero-dizaines'];
			baseCentaines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];
			progressionCentaines();			
			break;
		case '100':
			filingBases();
			baseIdCentaines = ['cent'];
			baseCentaines = ['1'];
			progressionCentaines();
			break;
		case '200':
			filingBases();
			baseIdCentaines = ['deux-cents'];
			baseCentaines = ['2'];
			progressionCentaines();
			break;
		case '012':
			baseUnites = ['0', '1', '2'];
			baseIdUnites = ['zero', 'un', 'deux'];
			baseDizaines = ['0', '1', '2'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt'];
			baseCentaines = ['1', '2'];
			baseIdCentaines = ['cent', 'deux-cents'];
			progressionCentaines();
			break;
		case '300':
			filingBases();
			baseIdCentaines = ['trois-cents'];
			baseCentaines = ['3'];
			progressionCentaines();
			break;
		case '0123':
			baseUnites = ['0', '1', '2', '3'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois'];
			baseDizaines = ['0', '1', '2', '3'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente'];
			baseCentaines = ['1', '2', '3'];
			baseIdCentaines = ['cent', 'deux-cents', 'trois-cents'];
			progressionCentaines();
			break;
		case '400':
			filingBases();
			baseIdCentaines = ['quatre-cents'];
			baseCentaines = ['4'];
			progressionCentaines();
			break;
		case 'sansunites':
			filingBases();
			baseUnites = ['0'];
			baseIdUnites = ['zero'];
			baseDizaines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];
			progressionCentaines();
			break;
		case '500':
			filingBases();
			baseIdCentaines = ['cinq-cents'];
			baseCentaines = ['5'];
			progressionCentaines();
			break;	
		case '012345':
			baseUnites = ['0', '1', '2', '3', '4', '5'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq'];
			baseDizaines = ['0', '1', '2', '3', '4', '5'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante'];
			baseCentaines = ['1', '2', '3', '4', '5'];
			baseIdCentaines = ['cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents'];
			progressionCentaines();
			break;
		case '600':
			filingBases();
			baseIdCentaines = ['six-cents'];
			baseCentaines = ['6'];
			progressionCentaines();
			break;
		case 'sansdizaines':
			filingBases();
			baseDizaines = ['0'];
			baseIdDizaines = ['zero-dizaines'];
			baseCentaines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];
			progressionCentaines();
			break;
		case '700':
			filingBases();
			baseIdCentaines = ['sept-cents'];
			baseCentaines = ['7'];
			progressionCentaines();
			break;
		case '01234567':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix'];
			baseCentaines = ['1', '2', '3', '4', '5', '6', '7'];
			baseIdCentaines = ['cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents'];
			progressionCentaines();
			break;
		case '800':
			filingBases();
			baseIdCentaines = ['huit-cents'];
			baseCentaines = ['8'];
			progressionCentaines();
			break;
		case '900':
			filingBases();
			baseIdCentaines = ['neuf-cents'];
			baseCentaines = ['9'];
			progressionCentaines();
			break;
		case '1000_9999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			progressionMille();
			break;
		}
	});

const selectionNiveauCM = document.getElementById('progressionCM').addEventListener('change', ($event) => {
	switch ($event.target.value) {
		case 'progCM':
			reset();
			break;
		case '1000_9999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			progressionMille();
			break;
		case '10000_99999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			progressionDixMille();
			break;
		case '100000_999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			progressionCentMille();
			break;
		case '1000000_9999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			baseUnitesMillion = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMillion = ['un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
			progressionUniteMillion();
			break;
		case '10000000_99999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
			baseDizainesMillion = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMillion = ['un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
			progressionDizaineMillion();
			break;
		case '100000000_999999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
			baseDizainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMillion = ['zero-dix-million', 'un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
			baseCentainesMillion = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMillion = ['un-cent-million', 'deux-cent-million', 'trois-cent-million', 'quatre-cent-million', 'cinq-cent-million', 'six-cent-million', 'sept-cent-million', 'huit-cent-million', 'neuf-cent-million'];
			progressionCentaineMillion();
			break;
		case '1000000000_9999999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
			baseDizainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMillion = ['zero-dix-million', 'un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
			baseCentainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMillion = ['zero-cent-million', 'un-cent-million', 'deux-cent-million', 'trois-cent-million', 'quatre-cent-million', 'cinq-cent-million', 'six-cent-million', 'sept-cent-million', 'huit-cent-million', 'neuf-cent-million'];
			baseUnitesMilliard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMilliard = ['un-milliard', 'deux-milliard', 'trois-milliard', 'quatre-milliard', 'cinq-milliard', 'six-milliard', 'sept-milliard', 'huit-milliard', 'neuf-milliard'];
			progressionUniteMilliard();
			break;
		case '10000000000_99999999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
			baseDizainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMillion = ['zero-dix-million', 'un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
			baseCentainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMillion = ['zero-cent-million', 'un-cent-million', 'deux-cent-million', 'trois-cent-million', 'quatre-cent-million', 'cinq-cent-million', 'six-cent-million', 'sept-cent-million', 'huit-cent-million', 'neuf-cent-million'];
			baseUnitesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMilliard = ['zero-milliard', 'un-milliard', 'deux-milliard', 'trois-milliard', 'quatre-milliard', 'cinq-milliard', 'six-milliard', 'sept-milliard', 'huit-milliard', 'neuf-milliard'];
			baseDizainesMilliard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMilliard = ['un-dix-milliard', 'deux-dix-milliard', 'trois-dix-milliard', 'quatre-dix-milliard', 'cinq-dix-milliard', 'six-dix-milliard', 'sept-dix-milliard', 'huit-dix-milliard', 'neuf-dix-milliard'];
			progressionDizaineMilliard();
			break;
		case '100000000000_999999999999':
			baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
			baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
			baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];	
			baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
			baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
			baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];
			baseUnitesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMillion = ['zero-million', 'un-million', 'deux-million', 'trois-million', 'quatre-million', 'cinq-million', 'six-million', 'sept-million', 'huit-million', 'neuf-million'];
			baseDizainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMillion = ['zero-dix-million', 'un-dix-million', 'deux-dix-million', 'trois-dix-million', 'quatre-dix-million', 'cinq-dix-million', 'six-dix-million', 'sept-dix-million', 'huit-dix-million', 'neuf-dix-million'];
			baseCentainesMillion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMillion = ['zero-cent-million', 'un-cent-million', 'deux-cent-million', 'trois-cent-million', 'quatre-cent-million', 'cinq-cent-million', 'six-cent-million', 'sept-cent-million', 'huit-cent-million', 'neuf-cent-million'];
			baseUnitesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdUnitesMilliard = ['zero-milliard', 'un-milliard', 'deux-milliard', 'trois-milliard', 'quatre-milliard', 'cinq-milliard', 'six-milliard', 'sept-milliard', 'huit-milliard', 'neuf-milliard'];
			baseDizainesMilliard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdDizainesMilliard = ['zero-dix-milliard', 'un-dix-milliard', 'deux-dix-milliard', 'trois-dix-milliard', 'quatre-dix-milliard', 'cinq-dix-milliard', 'six-dix-milliard', 'sept-dix-milliard', 'huit-dix-milliard', 'neuf-dix-milliard'];
			baseCentainesMilliard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
			baseIdCentainesMilliard = ['un-cent-milliard', 'deux-cent-milliard', 'trois-cent-milliard', 'quatre-cent-milliard', 'cinq-cent-milliard', 'six-cent-milliard', 'sept-cent-milliard', 'huit-cent-milliard', 'neuf-cent-milliard'];
			progressionCentaineMilliard();
			break;
		}
	});

/************************
 *  FONCTION DE MÉLANGE *
 ************************/

function melangerUnChiffre(donnees, affichage) {		
	affichageMelange.textContent = " ";
	if (donnees.length == 0) {
		window.alert("Vous devez choisir au moins un chiffre des unités !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoire = Math.floor(Math.random() * donnees.length);
		affichageMelange.textContent += donnees[nombreAleatoire] + " ";}
	}	
}

function melangerDeuxChiffres(donneesUnites, donneesDizaines, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités et un chiffre des dizaines !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		affichageMelange.textContent += donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";	}
		}	
}

function melangerTroisChiffres(donneesUnites, donneesDizaines, donneesCentaines, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, un chiffre des dizaines et un chiffre des centaines !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		affichageMelange.textContent += donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerQuatreChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines et des unités de milliers !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		affichageMelange.textContent += donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerCinqChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers et des dizaines de milliers !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		affichageMelange.textContent += donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerSixChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers et des centaines de milliers !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		affichageMelange.textContent += donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerSeptChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, donneesUnitesMillion, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0) || (donneesUnitesMillion.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers, des centaines de milliers et des unités de millions !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		var nombreAleatoireUnitesMillion = Math.floor(Math.random() * donneesUnitesMillion.length);
		affichageMelange.textContent += donneesUnitesMillion[nombreAleatoireUnitesMillion] + "." + donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerHuitChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, donneesUnitesMillion, donneesDizainesMillion, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0) || (donneesUnitesMillion.length == 0) || (donneesDizainesMillion.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers, des centaines de milliers, des unités de millions et des dizaines de millions !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		var nombreAleatoireUnitesMillion = Math.floor(Math.random() * donneesUnitesMillion.length);
		var nombreAleatoireDizainesMillion = Math.floor(Math.random() * donneesDizainesMillion.length);
		affichageMelange.textContent += donneesDizainesMillion[nombreAleatoireDizainesMillion] + donneesUnitesMillion[nombreAleatoireUnitesMillion] + "." + donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerNeufChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, donneesUnitesMillion, donneesDizainesMillion, donneesCentainesMillion, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0) || (donneesUnitesMillion.length == 0) || (donneesDizainesMillion.length == 0) || (donneesCentainesMillion.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers, des centaines de milliers, des unités de millions, des dizaines de millions et des centaines de millions !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		var nombreAleatoireUnitesMillion = Math.floor(Math.random() * donneesUnitesMillion.length);
		var nombreAleatoireDizainesMillion = Math.floor(Math.random() * donneesDizainesMillion.length);
		var nombreAleatoireCentainesMillion = Math.floor(Math.random() * donneesCentainesMillion.length);
		affichageMelange.textContent += donneesCentainesMillion[nombreAleatoireCentainesMillion] + donneesDizainesMillion[nombreAleatoireDizainesMillion] + donneesUnitesMillion[nombreAleatoireUnitesMillion] + "." + donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerDixChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, donneesUnitesMillion, donneesDizainesMillion, donneesCentainesMillion, donneesUnitesMilliard, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0) || (donneesUnitesMillion.length == 0) || (donneesDizainesMillion.length == 0) || (donneesCentainesMillion.length == 0) || (donneesUnitesMilliard.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers, des centaines de milliers, des unités de millions, des dizaines de millions, des centaines de millions et des unités de milliards !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		var nombreAleatoireUnitesMillion = Math.floor(Math.random() * donneesUnitesMillion.length);
		var nombreAleatoireDizainesMillion = Math.floor(Math.random() * donneesDizainesMillion.length);
		var nombreAleatoireCentainesMillion = Math.floor(Math.random() * donneesCentainesMillion.length);
		var nombreAleatoireUnitesMilliard = Math.floor(Math.random() * donneesUnitesMilliard.length);
		affichageMelange.textContent += donneesUnitesMilliard[nombreAleatoireUnitesMilliard] + "." + donneesCentainesMillion[nombreAleatoireCentainesMillion] + donneesDizainesMillion[nombreAleatoireDizainesMillion] + donneesUnitesMillion[nombreAleatoireUnitesMillion] + "." + donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerOnzeChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, donneesUnitesMillion, donneesDizainesMillion, donneesCentainesMillion, donneesUnitesMilliard, donneesDizainesMilliard, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0) || (donneesUnitesMillion.length == 0) || (donneesDizainesMillion.length == 0) || (donneesCentainesMillion.length == 0) || (donneesUnitesMilliard.length == 0) || (donneesDizainesMilliard.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers, des centaines de milliers, des unités de millions, des dizaines de millions, des centaines de millions, des unités de milliards et des dizaines de milliards !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		var nombreAleatoireUnitesMillion = Math.floor(Math.random() * donneesUnitesMillion.length);
		var nombreAleatoireDizainesMillion = Math.floor(Math.random() * donneesDizainesMillion.length);
		var nombreAleatoireCentainesMillion = Math.floor(Math.random() * donneesCentainesMillion.length);
		var nombreAleatoireUnitesMilliard = Math.floor(Math.random() * donneesUnitesMilliard.length);
		var nombreAleatoireDizainesMilliard = Math.floor(Math.random() * donneesDizainesMilliard.length);
		affichageMelange.textContent += donneesDizainesMilliard[nombreAleatoireDizainesMilliard] + donneesUnitesMilliard[nombreAleatoireUnitesMilliard] + "." + donneesCentainesMillion[nombreAleatoireCentainesMillion] + donneesDizainesMillion[nombreAleatoireDizainesMillion] + donneesUnitesMillion[nombreAleatoireUnitesMillion] + "." + donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerDouzeChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, donneesUnitesMillion, donneesDizainesMillion, donneesCentainesMillion, donneesUnitesMilliard, donneesDizainesMilliard, donneesCentainesMilliard, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0) || (donneesUnitesMillion.length == 0) || (donneesDizainesMillion.length == 0) || (donneesCentainesMillion.length == 0) || (donneesUnitesMilliard.length == 0) || (donneesDizainesMilliard.length == 0) || (donneesCentainesMilliard.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de milliers, des dizaines de milliers, des centaines de milliers, des unités de millions, des dizaines de millions, des centaines de millions, des unités de milliards, des dizaines de milliards et des centaines de milliards !");}
		else {
	for (compteur=0; compteur <200; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		var nombreAleatoireUnitesMillion = Math.floor(Math.random() * donneesUnitesMillion.length);
		var nombreAleatoireDizainesMillion = Math.floor(Math.random() * donneesDizainesMillion.length);
		var nombreAleatoireCentainesMillion = Math.floor(Math.random() * donneesCentainesMillion.length);
		var nombreAleatoireUnitesMilliard = Math.floor(Math.random() * donneesUnitesMilliard.length);
		var nombreAleatoireDizainesMilliard = Math.floor(Math.random() * donneesDizainesMilliard.length);
		var nombreAleatoireCentainesMilliard = Math.floor(Math.random() * donneesCentainesMilliard.length);
		affichageMelange.textContent += donneesCentainesMilliard[nombreAleatoireCentainesMilliard] + donneesDizainesMilliard[nombreAleatoireDizainesMilliard] + donneesUnitesMilliard[nombreAleatoireUnitesMilliard] + "." + donneesCentainesMillion[nombreAleatoireCentainesMillion] + donneesDizainesMillion[nombreAleatoireDizainesMillion] + donneesUnitesMillion[nombreAleatoireUnitesMillion] + "." + donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + "." + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

/*********************************************
 *  FONCTION DE MISE À ZÉRO et selection tous*
 *********************************************/

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageMelange.textContent = " ";
	unites.splice(0, unites.length);
	dizaines.splice(0, dizaines.length);
	centaines.splice(0, centaines.length);
	unitesMille.splice(0, unitesMille.length);
	dizainesMille.splice(0, dizainesMille.length);
	centainesMille.splice(0, centainesMille.length);	
	unitesMillion.splice(0, unitesMillion.length);
	dizainesMillion.splice(0, dizainesMillion.length);
	centainesMillion.splice(0, centainesMillion.length);
	unitesMilliard.splice(0, unitesMilliard.length);
	dizainesMilliard.splice(0, dizainesMilliard.length);
	centainesMilliard.splice(0, centainesMilliard.length);	
}

function mise_a_zero () {
	const niveau1 = document.getElementById("progressionCP");
	niveau1.value = "progCP";
	const niveau2 = document.getElementById("progressionCE1");
	niveau2.value = "progCE1";	
	}

function selectAll(nom, base, unit) {
		checkboxes = document.getElementsByName(nom);
		for (var i = 0; i < checkboxes.length; ++i) {checkboxes[i].checked = true;}
			for (var i=0; i<base.length; ++i) {unit.push(base[i]);}			
	}

function selectNone(nom, base, unit) {
		checkboxes = document.getElementsByName(nom);
		for (var i = 0; i < checkboxes.length; ++i) {checkboxes[i].checked = false;}
			for (var i=0; i<base.length; ++i) {unit.splice(0, base.length);}			
	}




