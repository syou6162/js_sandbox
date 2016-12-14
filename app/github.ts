module Github {
    export function getRepositories() {
	var repositories = [];
	var xhr = new XMLHttpRequest();
	xhr.open('GET', encodeURI('https://api.github.com/users/syou6162/repos'), false);
	xhr.onload = function() {
	    if (xhr.status === 200) {
		repositories =  JSON.parse(xhr.responseText).slice(0, 3);
	    } else {
		alert('Request failed.  Returned status of ' + xhr.status);
	    }
	};
	xhr.send();
	return repositories;
    }
}
