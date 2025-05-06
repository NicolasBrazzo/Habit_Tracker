var options = {
    chart: {
      type: 'bar',
      width: '1000px',
      position: 'absolute',
      toolbar: { show: false },
      foreColor: '#fff'
    },
    series: [
      {
        name: 'Acqua',
        data: [1, 0.6, 0.5, 0.1, 1, 0.2, 1, 1, 0.2, 1, 0.4, 0.7]
      },
      {
        name: 'Lettura',
        data: [0.5, 0, 0.4, 0.7, 0.1, 0.2, 0.9, 1, 0.2, 1, 0.1, 0.6]
      },
      {
        name: 'Meditazione',
        data: [0.1, 0.2, 0.5, 1, 0.4, 0.1, 0.4, 1, 0.2, 1, 0.4, 0.7]
      }
    ],
    xaxis: {
      categories: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom', 'lun', 'mar', 'Dom', 'Dom', 'Dom']
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      }
    },
    dataLabels: { enabled: false },
    legend: { position: 'top' },
    title: {
      text: 'Progressi settimanali (esempio)',
      align: 'center'
    },
    colors: ['#fff', '#5e6681', '#501d86  '],
    yaxis: {
      min: 0,
      max: 1,
      tickAmount: 1
    }
  };
  
  const chart = new ApexCharts(document.querySelector("#habitChart"), options);
  chart.render();