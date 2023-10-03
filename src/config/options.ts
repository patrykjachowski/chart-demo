const colorPrimary = 'rgb(43,100,215)'

export const options = {
  backgroundColor: colorPrimary,
  borderColor: colorPrimary,
  borderWidth: 2,
  fill: true,
  maintainAspectRatio: false,
  pointBackgroundColor: colorPrimary,
  pointHoverRadius: 4,
  pointRadius: 0,
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  tension: 0.2,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgb(255, 255, 255)',
      bodyColor: '#23272d',
      bodyFont: {
        weight: '500',
        size: 14,
      },
      bodySpacing: 10,
      padding: 15,
      position: 'nearest',
      usePointStyle: true,
      callbacks: {
        label: function (context: any) {
          return ` ${context.dataset.tooltipLabels[context.dataIndex]}: ${context.parsed.y}`
        },
        title: () => null,
      },
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
