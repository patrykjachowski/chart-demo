export const hoverLine = {
  id: 'hoverLine',
  afterDatasetDraw: function (chart: any) {
    const {
      ctx,
      tooltip,
      chartArea: { height },
      scales: { x },
    } = chart
    const topY = ctx.canvas.offsetTop
    const bottomY = topY + height

    if (tooltip._active.length > 0) {
      const xCoor = x.getPixelForValue(tooltip.dataPoints[0].dataIndex)

      ctx.save()
      ctx.beginPath()
      ctx.lineWidth = 0.2
      ctx.strokeStyle = 'rgb(125 142 164)'
      ctx.moveTo(xCoor, topY)
      ctx.lineTo(xCoor, bottomY)
      ctx.stroke()
      ctx.closePath()
    }
  },
}
