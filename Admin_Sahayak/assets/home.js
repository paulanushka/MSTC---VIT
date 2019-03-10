$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

var chart = new Chart(document.getElementById('myBarChart').getContext('2d'), {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: `rgba(9, 236, 20, 0.4)`,
            hoverBackgroundColor: 'rgba(9, 236, 20, 0.6)',
            // borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

var chart = new Chart(document.getElementById('myDoughnutChart').getContext('2d'), {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: `rgba(9, 236, 20, 0.4)`,
            hoverBackgroundColor: 'rgba(9, 236, 20, 0.6)',
            // borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

// TODO: Function to generate a random color for each bar
chart.datasets.forEach( () =>  {
    
});