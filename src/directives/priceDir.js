const formatter = new Intl.NumberFormat("kz-KZ", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
  currencyDisplay: "narrowSymbol",
});

export default {
  mounted(el, binding) {
    const price = binding.value;
    el.textContent = formatter.format(price);
  },

  updated(el, binding) {
    const price = binding.value;
    el.textContent = formatter.format(price);
  },
};
