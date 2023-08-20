const chartRadialExcellent = new ApexCharts(
  document.querySelector("#chart-radial-excellent"),
  {
    series: [87],
    chart: {
      height: 225,
      type: "radialBar",
    },
    colors: ["#55E597"],
    plotOptions: {
      radialBar: {
        track: {
          background: "#D7F8E7",
        },
        hollow: {
          size: "80%",
        },
        dataLabels: {
          name: {
            fontSize: "4rem",
            fontWeight: "bold",
            fontFamily: "Open Sans",
            color: "#223043",
            offsetY: "25%",
          },
          value: {
            show: false,
          },
        },
      },
    },
    labels: ["87"],
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "3.5rem",
                  offsetY: "22%",
                },
              },
            },
          },
        },
      },
    ],
  },
);
chartRadialExcellent.render();

const chartColumSummary = new ApexCharts(
  document.querySelector("#chart-column-summary"),
  {
    series: [
      {
        data: [10, 3, 12, 15, 74],
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FD8080", "#FD956E", "#FECF7A", "#9DEEC2", "#54E596"],
    plotOptions: {
      bar: {
        columnWidth: "20%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        ["10%", "121"],
        ["3%", "181"],
        ["12%", "324"],
        ["15%", "822"],
        ["74%", "1126"],
      ],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
);
chartColumSummary.render();

const chartLineScoreHistory = new ApexCharts(
  document.querySelector("#chart-score-history"),
  {
    chart: {
      type: "line",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Data",
        data: [2, 3.5, 0, 4, 2.25, 3.5, 2.5, 2.75, 4, 2.75, 3.75, 3, 3.25],
      },
    ],
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        width: 20,
      },
    },
    yaxis: {
      show: false,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    grid: {
      strokeDashArray: 10,
      row: {
        opacity: 1,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#3EE491"],
  },
);
chartLineScoreHistory.render();

function initCarousel() {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 16,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

AOS.init();
