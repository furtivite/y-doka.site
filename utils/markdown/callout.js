const { utils } = require("markdown-it")()

const elementRegexp = /^callout\s+(.*)$/

const callout = {
  validate(params) {
    return params.trim().match(elementRegexp)
  },

  render(tokens, idx) {
    const { info, nesting } = tokens[idx]
    const matches = info.trim().match(elementRegexp)

    if (nesting === 1) {
      const icon = utils.escapeHtml(matches[1])
      return `<aside class="callout"><div class="callout__content"><span>${icon}</span><div>`
    }

    return `</div></div></aside>`
  },
}

module.exports = callout
