var iconLink = document.createElement('link')
iconLink.rel = 'icon'
iconLink.type = 'image/x-icon'
iconLink.href = 'https://www.monobank.ua/img/favicon/favicon-mono.ico'
iconLink.onerror = function () {
  var defaultIconLink = document.createElement('link')
  defaultIconLink.rel = 'icon'
  defaultIconLink.type = 'image/svg+xml'
  defaultIconLink.href = '/assets/star-fill.svg'
  document.head.appendChild(defaultIconLink)
}
document.head.appendChild(iconLink)
