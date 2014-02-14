#HtmlEditorStylingHook#

A module to allow easy adding of CSS classes to SilverStripe's `HtmlEditorField` instances.

###Simple example###

_HomePage.php_
```php
<?php

class HomePage extends Page {

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->dataFieldByName('Content')->setAttribute('data-mce-body-class', 'HomePage');

		return $fields;
	}

}
```

_editor.css_
```css
.HomePage {
	background: #000;
	color: #fff;
}
```

Currently only set up for use in the CMS. To use with a different `HtmlEditorConfig` instance, simply copy the approach in _config.php