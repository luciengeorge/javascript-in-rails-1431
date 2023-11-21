import {Controller} from '@hotwired/stimulus'

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ['list', 'form']

  createMonument(event) {
    event.preventDefault()

    fetch(this.formTarget.action, {
      method: this.formTarget.method.toUpperCase(),
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(this.formTarget),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.monument_item) {
          this.listTarget.insertAdjacentHTML('beforeend', data.monument_item)
        }
        this.formTarget.outerHTML = data.form
      })
  }
}
