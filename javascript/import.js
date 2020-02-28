class Remote { 

  let xhr = null; new XMLHttpRequest();
  constructor(url,callback) {
	this.url = url;
	this.callback = callback;
	this.xhr = new XMLHttpRequest();
  }
  
  this.xhr.onload= function(){ this.callback(this.responseText)}
  
  fetch() {
    this.xhr.open(this.url,'GET',true);
	this.xhr.send();
  }
}

export function fetchRemoteData(url,callback){
	let remote = new Remote(url,data => callback(JSON.parse(data)));
}