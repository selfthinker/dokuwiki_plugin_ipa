/**
 * JavaScript for the IPA Plugin
 * - adds the button for the typewriter popup to the toolbar
 *
 * @author     Anika Henke <anika@selfthinker.org>
 */

if(window.toolbar!=undefined) {
  toolbar[toolbar.length] = {
    "type":"mediapopup",
    "title":"IPA",
    "icon":"../../plugins/ipa/ipa.png",
    "url":"lib/plugins/ipa/ipa.html?id=",
    "name":"ipa_chars",
    "options":"width=680,height=470,left=20,top=20,scrollbars=yes,resizable=yes"
  };
}
