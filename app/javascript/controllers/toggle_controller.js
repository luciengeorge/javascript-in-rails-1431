import {Controller} from '@hotwired/stimulus'

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ['button', 'toggelable']

  fire() {
    this.toggelableTarget.classList.toggle('d-none')
    if (this.buttonTarget.innerText.match(/Add/)) {
      this.buttonTarget.innerText = 'Hide Form'
    } else {
      this.buttonTarget.innerText = 'Add a monument'
    }
  }
}
