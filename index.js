jQuery(function() {

  //Ставка
  jQuery("#slider-range-max").slider({
    range: "max",
    min: 0.5,
    max: 15,
    value: 5,
    step: 0.5,
    slide: function(event, ui) {
      jQuery("#amount").val(ui.value);
      calc();
    }
  });
  jQuery("#amount").val(jQuery("#slider-range-max").slider("value"));
});
jQuery(function() {
  //Первоначальный взнос
  price = document.getElementById("mortgage-calculator__price-value").innerHTML;
  initialFeeFirst = price * 0.1;
  jQuery("#slider-range-max2").slider({
    range: "max",
    min: 0,
    max: price,
    step: 10000,
    value: initialFeeFirst,
    slide: function(event, ui) {
      jQuery("#amount2").val(ui.value);
      calc();
    }
  });
  jQuery("#amount2").val(jQuery("#slider-range-max2").slider("value"));
});
jQuery(function() {
  // Срок кредита, лет
  jQuery("#slider-range-max3").slider({
    range: "max",
    min: 1,
    max: 40,
    value: 30,
    step: 1,
    slide: function(event, ui) {
      jQuery("#amount3").val(ui.value);
      calc();
    }
  });
  jQuery("#amount3").val(jQuery("#slider-range-max3").slider("value"));
});

function calc(par) {

  price = document.getElementById("mortgage-calculator__price-value").innerHTML;
  creditTerm = document.cl_form.amount3.value * 12;
  rate = document.cl_form.amount.value;
  rateMonth = rate / creditTerm / 100;
  initialFee = document.cl_form.amount2.value;
  paymentValue = Math.round(((price - initialFee)) * rateMonth * ((1 + rateMonth) ** creditTerm) / (((1 + rateMonth) ** creditTerm) - 1));
  document.cl_form.summFinal.value = paymentValue;
  return false;
}