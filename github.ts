module Github {
    var x = 0;
    var repositories = [];
    export function insertRepositoryName() {
	if (x >= repositories.length) return;
	var item = repositories[x];
	var repos = document.getElementById('repositories');
	var tmp = document.createElement('li');
	tmp.innerHTML = item.name;
	repos.appendChild(tmp);
	x += 1;
    }
    export function getRepositories() {
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
    }
    window.addEventListener("keydown", (event) => {
	console.log(event.key);
    }, false);
}

let button = document.createElement('button');
button.textContent = "Push this button!";
button.onclick = Github.insertRepositoryName;
document.body.appendChild(button);
Github.getRepositories();
