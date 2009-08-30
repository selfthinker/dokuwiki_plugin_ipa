
window.onload = function(){
    if(opener) document.getElementById("copyIpa").style.display = 'none';
}

function InsertChar(sUnicodeCode) {
    if(!opener){
        document.getElementById("txtIpa").focus();
        document.getElementById("txtIpa").value += String.fromCharCode(parseInt(sUnicodeCode, 16));
    } else {
        opener.insertTags('wiki__text',String.fromCharCode(parseInt(sUnicodeCode, 16)),'','');
    }
}

function CopyIpaToClipboard() {
    if (window.clipboardData) {
        window.clipboardData.setData('Text', document.getElementById("txtIpa").value);
    } else {
        document.getElementById("txtIpa").focus();
        document.getElementById("txtIpa").select();
    }
}

