/**
 * JavaScript for the Typewriter Popup for the IPA Plugin
 *
 * @author     Anika Henke <anika@selfthinker.org>
 * @author     http://de.wikipedia.org/wiki/Wikipedia:Helferlein/IPA_Typewriter
 */

window.onload = function(){
    // if the popup was opened from the toolbar, don't display the 'copy to clipboard' tools
    if(opener) document.getElementById("copyIpa").style.display = 'none';
}

function InsertChar(sUnicodeCode) {
    if(!opener){
        // if the popup was NOT opened from the toolbar, insert each selected char into the 'copy to clipboard' text box
        document.getElementById("txtIpa").focus();
        document.getElementById("txtIpa").value += String.fromCharCode(parseInt(sUnicodeCode, 16));
    } else {
        // if the popup was opened from the toolbar, insert each selected char into the wiki text
        opener.insertTags('wiki__text',String.fromCharCode(parseInt(sUnicodeCode, 16)),'','');
    }
}

// copy text into clipboard (if possible, else select the text)
function CopyIpaToClipboard() {
    if (window.clipboardData) {
        window.clipboardData.setData('Text', document.getElementById("txtIpa").value);
    } else {
        document.getElementById("txtIpa").focus();
        document.getElementById("txtIpa").select();
    }
}
