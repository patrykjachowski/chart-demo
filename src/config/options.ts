import { externalTooltipHandler } from './tooltip'

export const options = {
  backgroundColor: 'rgb(43,100,215)',
  borderColor: 'rgb(43,100,215)',
  fill: true,
  borderWidth: 2,
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
  },
  tension: 0.2,
  plugins: {
    legend: {
      display: false,
    },
    chartAreaBorder: {
      borderColor: 'red',
      borderWidth: 2,
      borderDash: [5, 5],
      borderDashOffset: 2,
    },
    tooltip: {
      padding: 10,
      enabled: false,
      position: 'nearest',
      external: externalTooltipHandler,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        align: 'inner',
      },
    },
    y: {
      beginAtZero: true,
      border: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 4,
      },
      grid: {
        color: '#F2F4F7',
      },
      position: 'right',
    },
  },
}
