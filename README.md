#HtmlEditorStylingHook#

A module to allow easy adding of CSS classes to SilverStripe's `HtmlEditorField` instances.

###Simple example###

_HomePage.php_
```php
<?php

use SilverStripe\Forms\FieldList;

class HomePage extends Page
{
    public function getCMSFields() {
        $this->beforeUpdateCMSFields(function (FieldList $fields) {
            if ($content = $fields->dataFieldByName('Content')) {
                $content->setAttribute('data-mce-body-class', 'HomePage');
            }
        });

        return parent::getCMSFields();
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

Currently only set up for use in the CMS. To use with a different `HtmlEditorConfig` instance, simply copy the approach in `_config.php`
