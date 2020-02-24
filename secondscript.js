const imigongo= document.getElementById("imigongo")
const akarusho= document.getElementById("akarusho")
const abagabo= document.getElementById("abagabo")
const phones= document.getElementById("phones")
const ibiseke= document.getElementById("ibiseke")
const ibicuma= document.getElementById("ibicuma")
const abagore= document.getElementById("abagore")
const ibikapu= document.getElementById("ibikapu")
const ibirungo= document.getElementById("ibirungo")

//Getting Id to use in switch
function getFieldName(inputArr){
	inputArr.forEach(function(input){
	return input.id	
	})
console.log(getFieldName(["phones", "ibiseke", "ibicuma", "abagore", "abagabo", "ibikapu", "ibirungo", "imigongo", "akarusho"]))
	
}



function getTotalPrice(val){
var price =0;
switch(val){
	case "imigongo": 
		price=40;
		break;
	case "ibiseke":
	case "ibikapu":
		price=60;
		break;
	case "ibicuma":
	case "abagore":
		price= 20;
		break;
	case "ibirungo":
		price= 10;
		break;
	case "akarusho":
	case "abagabo":
		price= 15;
		break;
	case "phones":
		price= 300;
		break;
}
return `You have selected the products of ${price} Rwf`;
}


console.log(getPrice("phones"))

