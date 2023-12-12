var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var ctry_list = "";
for(var ctry=0; ctry<country_list.length; ctry++){
	ctry_list += "<option value="+country_list[ctry]+">"+country_list[ctry]+"</option>";
}

var mhtml="";
for(var i=1;i<=12;i++)
{
	mhtml += "<option value='"+i+"'>"+i+"</option>"
}

var yhtml="";
for(var i=2019;i<=2049;i++)
{
	yhtml += "<option value='"+i+"'>"+i+"</option>"
}

var menu_cnt=0;
function mainMenu(){
	if(menu_cnt%2==0)
		document.querySelector("nav ul").style.display="block";
	else
		document.querySelector("nav ul").style.display="none";
	menu_cnt++;
}

var search_cnt=0;
function searchBox(){
	if(search_cnt%2==0)
		document.querySelector("header div:last-child div:first-child").style.display="block";
	else
		document.querySelector("header div:last-child div:first-child").style.display="none";
	search_cnt++;
}

var acc_cnt=0;
function myAccount(){
	if(acc_cnt%2==0)
		document.querySelector("#myacc-menu ul").style.display="block";
	else
		document.querySelector("#myacc-menu ul").style.display="none";
	acc_cnt++;
}

var info_cnt=0;
function infoLinks(){
	if(info_cnt%2==0)
	{
		document.querySelector("#info-links-menu #links").style.display="block";
	}
	else
		document.querySelector("#info-links-menu #links").style.display="none";
	info_cnt++;
}

var news_cnt=0;
function subscribe(){
	if(news_cnt%2==0)
		document.querySelector("#newsletter #news").style.display="block";
	else
		document.querySelector("#newsletter #news").style.display="none";
	news_cnt++;
}