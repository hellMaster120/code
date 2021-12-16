var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://www.google.com/search?q=how+to+make+a+http+request+in+javascript&rlz=1CARWXF_enUS812US812&oq=how+to+do+a+http+r&aqs=chrome.1.69i57j0i22i30l9.8014j0j9&sourceid=chrome&ie=UTF-8&safe=active&ssui=on", false ); // false for synchronous request
xmlHttp.send( null );
console.log(xmlHttp.responseText)