<?php
/**
 * @license     GPL 2 (http://www.gnu.org/licenses/gpl.html)
 * @author      A.C. Henke <a.c.henke@arcor.de>
 * @author      http://de.wikipedia.org/wiki/Wikipedia:Helferlein/IPA_Typewriter
 */

if(!defined('DOKU_INC')) die();
if(!defined('DOKU_PLUGIN')) define('DOKU_PLUGIN',DOKU_INC.'lib/plugins/');
require_once(DOKU_PLUGIN.'action.php');

class action_plugin_ipa extends DokuWiki_Action_Plugin {

    function getInfo(){
        return array(
            'author' => 'A.C. Henke',
            'email'  => 'a.c.henke@arcor.de',
            'date'   => '2006-11-12',
            'name'   => 'IPA Plugin',
            'desc'   => 'Pseudo-Plugin for adding an IPA Typewriter to the Toolbar',
            'url'    => 'http://wiki.splitbrain.org/plugin:ipa',
        );
    }

    function register(&$controller) {
        return false;
    }


}
