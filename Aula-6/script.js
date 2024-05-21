function detectNav () {
    if((navigator.userAgent.indexOf("Opera")|| navigator.userAgent.indexOf('OPR')) != -1){
        alert('Seu navegador é o Opera');
    }else if(navigator.userAgent.indexOf("Edg")!= -1){
        alert('Seu navegador é o Edge');
        window.location.href = "microsoft-edge.html";
    }else if(navigator.userAgent.indexOf("Chrome")!= -1){
        alert('Seu navegador é o Chrome');
        window.location.href = "google-chrome.html";
    }else if(navigator.userAgent.indexOf("Firefox")!= -1){
        alert('Seu navegador é o Firefox');
    }else {
        alert('Seu navegador é desconhecido');
    }
}