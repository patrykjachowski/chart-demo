const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div')

  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.style.background = 'rgb(255,255,255)'
    tooltipEl.style.borderRadius = '8px'
    tooltipEl.style.color = '#23272d'
    tooltipEl.style.opacity = 1
    tooltipEl.style.pointerEvents = 'none'
    tooltipEl.style.position = 'absolute'
    tooltipEl.style.transform = 'translate(-50%, 0)'
    tooltipEl.style.transition = 'all .1s ease'

    const table = document.createElement('table')
    table.style.margin = '0px'

    tooltipEl.appendChild(table)
    chart.canvas.parentNode.appendChild(tooltipEl)
  }

  return tooltipEl
}

export const externalTooltipHandler = (context: any) => {
  // Tooltip Element
  const { chart, tooltip } = context
  const tooltipEl = getOrCreateTooltip(chart)

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0
    return
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || []
    const bodyLines = tooltip.body.map((b) => b.lines)

    const tableHead = document.createElement('thead')

    titleLines.forEach((title: any) => {
      const tr = document.createElement('tr')
      tr.style.borderWidth = 0

      const th = document.createElement('th')
      th.style.borderWidth = 0
      th.style.textAlign = 'left'
      th.style.paddingBottom = '5px'

      const text = document.createTextNode(title)

      th.appendChild(text)
      tr.appendChild(th)
      tableHead.appendChild(tr)
    })

    const tableBody = document.createElement('tbody')
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i]

      const span = document.createElement('span')
      span.style.background = colors.backgroundColor
      span.style.borderColor = colors.borderColor
      span.style.borderWidth = '2px'
      span.style.borderRadius = '50%'
      span.style.marginRight = '10px'
      span.style.height = '10px'
      span.style.width = '10px'
      span.style.display = 'inline-block'

      const tr = document.createElement('tr')
      tr.style.backgroundColor = 'inherit'
      tr.style.borderWidth = 0

      const td = document.createElement('td')
      td.style.borderWidth = 0

      const span2 = document.createElement('span')
      span2.style.fontWeight = 'bold'

      const tooltipLabel = tooltip.dataPoints[i].dataset.tooltipLabels[i]

      const text = document.createTextNode(`${tooltipLabel}`)
      const value = document.createTextNode(body)
      const valueWrapper = document.createElement('span')
      valueWrapper.style.fontWeight = 'bold'
      valueWrapper.style.display = 'inline-block'
      valueWrapper.style.marginLeft = '25px'
      valueWrapper.style.width = '30px'
      valueWrapper.style.textAlign = 'right'

      td.appendChild(span)
      td.appendChild(text)
      valueWrapper.appendChild(value)
      td.appendChild(valueWrapper)
      tr.appendChild(td)
      tableBody.appendChild(tr)
    })

    const tableRoot = tooltipEl.querySelector('table')

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove()
    }

    // Add new children
    tableRoot.appendChild(tableHead)
    tableRoot.appendChild(tableBody)
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1
  tooltipEl.style.left = positionX + tooltip.caretX + 'px'
  tooltipEl.style.top = positionY + tooltip.caretY + 10 + 'px'
  tooltipEl.style.font = tooltip.options.bodyFont.string
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px'
  tooltipEl.style.boxShadow = '0 0 7px rgba(0, 0, 0, 0.25)'
}
