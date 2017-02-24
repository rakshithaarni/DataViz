/* Start the JavasScript tag here. The following entails details about Vietnamese refugees in China based on secondary research*/

/*Number of Vietnamese refugees who fled to China by the end of 1979 */
var VietnamRefugeesInChina = 250000;

/*The first Diplomatic Action taken in 1979 to resettle refugees from China, Hong Kong and other South East Asian countries to Western countries, also referred to as "third countries"*/
var FirstDiplomaticActionforRepatriation = "Orderly Departure Program";

/*If the Vietnamese refugees resettled in China, then true*/
var ResettlementInChina = true;

/*Third countries where the refugees were repatriated to*/
var ListOfThirdCountries = ["USA", "Canada", "Australia", "France", "United Kingdom", "Germany"];

/*A summary of the international agreements brokered between countries and/or international organizations to address the Vietnamese influx in China.
 The following contains details of each agreement during the Indochina refugee crisis, from 1975, when the refugee influx to China stareed to 2000,
 the year that UNHCR states as the end of the Vietnamese influx to its neighboring as well as western countries.
 Each agreement contains five properties inlcuding name, year, brokered by, solution arrived at and the scale of people impacted by the same.
 The scale here represents the number of people who were resttled, repatriated or integrated in China, Hong Kong, or third countries. */

var International_Response = [{
	"Name" : "Operation New Arrivals",
	"Year" : "1975",
	"Brokered by" : "United States of America",
	"Solution" : "Resettlement",
	"Scale" : "130000"
}, {
	"Name" : "Oderly Departure Program",
	"Year" : "1979",
	"Brokered by" : "UNHCR",
	"Solution" : "Repatriation",
	"Scale" : "650000"
}, {
	"Name" : "Comprehensive Plan of Action",
	"Year" : "1989",
	"Brokered by" : "UNHCR",
	"Solution" : "Asylum Seekers",
	"Scale" : "70000"
}, {
	"Name" : "Orderly Return Program",
	"Year" : "1991",
	"Brokered by" : "UK, Hong Kong, Vietnam",
	"Solution" : "Repatriation",
	"Scale" : "109000"
}]

/* Goal: Go through every item in my International_Response list and print to the console everytime I find one
 * Whose solution was Repatriation */

for (var counter = 0; counter < International_Response.length; counter++) {/*Create a unique variable name to set it to the counter rate of the object being looked at*/
	var Desired_Solution = International_Response[counter];

	/*Use a conditonal if to test if the object has "Repatriation" as the "solution" property
	 *If it does, print the object
	 *If it does not, print "NotRepatriation"*/
	if (Desired_Solution.Solution == "Repatriation") {
		console.log(Desired_Solution);
	} else {
		console.log("NotRepatriation");
	}
}	