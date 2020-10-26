class Doomer {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector
    this.$el.on = this.on
    this.$el.addClass = this.addClass
    this.$el.setHTML = this.setHTML
    this.$el.insertHTML = this.insertHTML
    this.$el.toggleClass = this.toggleClass
    this.$el.clear = this.clear
    return this.$el
  }
  setHTML(html) {
    this.innerHTML = html
    return this
  }
  insertHTML(html) {
    this.insertAdjacentHTML('beforeend', html)
    return this
  }
  on(event, callback) {
    this.addEventListener(event, (e) => callback(e))
  }
  toggleClass(name) {
    if (this.classList.contains(name)) this.classList.remove(name)
    else this.classList.add(name)
  }
  addClass(name) {
    this.classList.add(name)
  }
  clear() {
    this.innerHTML = ''
    return this
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
