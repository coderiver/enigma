$(document).ready(function() {
	
// select
var select = $('.select');
select.find('.select__el').on('change', function() {
  var optionSelected = $('option:selected', this),
    valueSelected = this.value;
  $(this).prev().find('.select__value').html(valueSelected);
});


});