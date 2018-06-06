<?php

use SilverStripe\Core\Manifest\ModuleResourceLoader;
use SilverStripe\Forms\HTMLEditor\HTMLEditorConfig;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;

if (($cfg = HTMLEditorConfig::get('cms')) && $cfg instanceof TinyMCEConfig) {
    $cfg->enablePlugins([
        'htmleditorstylinghook' => ModuleResourceLoader::resourceURL('kinglozzer/htmleditorstylinghook: client/dist/js/plugin.js')
    ]);
}
