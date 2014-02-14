<?php

HtmlEditorConfig::get('cms')->enablePlugins(
	array('htmleditorstylinghook' => '../../../' . basename(dirname(__FILE__)) . '/javascript/editor_plugin.js')
);