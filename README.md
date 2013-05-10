#CharacterCountdown

jQuery plugin to countdown characters remaining that can be inserted in a text field. Useful for fields with character limits such as Twitter status updates.

##Usage

This is a very simple plugin. All you need to do is include the plugin file in your HTML then initialize the elements and the JS:

```html
<textarea name="status" id="input_status"></textarea>
<span class="countdown" id="input_status_countdown" title="Maximum character count.">250</span>
```

```javascript
$(document).ready(function() {
	$('#input_status').charCountdown({ charLimit : 140, charsRemainingText : ' characters remaining' });
});
```

You can optionally pass in the charLimit and charsRemainingText parameters.

- charLimit defaults to 250
- charsRemainingText defaults to ''