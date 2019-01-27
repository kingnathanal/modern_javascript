document.getElementById('button').addEventListener('click',loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET','data.txt', true);

    //console.log('READYSTATE', xhr.readyState);

    // optional - used for spinners and loaders
    xhr.onprogress = function() {
        console.log('READYSTATE',xhr.readyState);
    }

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"

    xhr.onload = function(){
        if(this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // old style
    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.reponseText);
    //     }
    // }

    xhr.onerror = function() {
        console.log('Request Error....');
    }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
}