(function($) {
	$.fn.charCountdown = function(options) {
		var settings = $.extend({
			charLimit : 250,
			charsRemainingText : '',
			preventExcessChars : false,
		}, options);

		var _input = this;
		var _countdown = $('#' + _input.attr('id') + '_countdown');
		var _remainingChars = settings.charLimit - $(this).val().length;
		_countdown.text(_remainingChars + settings.charsRemainingText);

		if (_remainingChars <= 0) {
			_countdown.addClass('countdown--invalid').removeClass('countdown--valid');

			if (settings.preventExcessChars) {
				_input.val(_input.val().substr(0, settings.charLimit));
			}
		} else {
			_countdown.addClass('countdown--valid').removeClass('countdown--invalid');
		}

		_input.on('change keyup', function(event) {
			event.preventDefault();

			_remainingChars = settings.charLimit - $(this).val().length;
			_countdown.text(_remainingChars + settings.charsRemainingText);

			if (_remainingChars <= 0) {
				_countdown.addClass('countdown--invalid').removeClass('countdown--valid');
				if (settings.preventExcessChars) {
					_input.val(_input.val().substr(0, settings.charLimit));
				}
			} else {
				_countdown.addClass('countdown--valid').removeClass('countdown--invalid');
			}
		});
	}
} (jQuery));