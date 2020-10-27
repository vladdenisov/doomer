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
    this.$el.insertNodes = this.insertNodes
    this.$el.attr = this.attr
    this.$el.setText = this.setText
    return this.$el
  }
  setHTML(html) {
    this.innerHTML = html
    return this
  }
  setText(text) {
    this.innerText = text
    return this
  }
  insertHTML(html) {
    this.insertAdjacentHTML('beforeend', html)
    return this
  }
  on(event, callback) {
    this.addEventListener(event, (e) => callback(e))
    return this
  }
  toggleClass(name) {
    if (this.classList.contains(name)) this.classList.remove(name)
    else this.classList.add(name)
    return this
  }
  addClass(name) {
    this.classList.add(name)
    return this
  }
  clear() {
    this.innerHTML = ''
    return this
  }
  insertNodes(node) {
    this.append(node)
    return this
  }
  attr(name, value) {
    this.setAttribute(name, value)
    return this
  }
}

const $ = (selector) => {
  return new Doomer(selector)
}

$.create = (tag, classNames) =>{
  const el = document.createElement(tag)
  if (classNames) el.classList.add(classNames)
  return el
}

export default $
