import lorem from '@/assets/lorem'

export default {
  mounted(el, binding) {
    const length = binding.value
    const lang = binding.arg || 'en'
    el.textContent = lorem[lang].split(' ').slice(0, length).join(' ').replace(/,$/, '')
  },
}