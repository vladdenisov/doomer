class Doomer {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector
    return this.$el
  }
  setHTML(html) {
    this.$el.innerHTML = html
    return this
  }
  insertHTML(html) {
    this.$el.insertAdjacentHTML('beforeend', html)
    return this
  }
  on(event, callback) {
    this.$el.addEventListener(event, callback)
  }
  toggleClass(name) {
    if (this.$el.classList.contains(name)) this.$el.classList.remove(name)
    else this.$el.classList.add(name)
  }
  addClass(name) {
    this.$el.classList.add(name)
  }


}
const $ = (selector) => {
  return new Doomer(selector)
}

$.create = (tag, classNames) =>{
  const el = document.createElement(tag)
  el.classList.add(classNames)
  return el
}

export default $
