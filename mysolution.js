const barChart = document.querySelectorAll('.chart_pie-chart');
const spending = document.querySelectorAll('.chart_spending');

const mondayChart = document.getElementById('monday-chart');
const mondayChartSpending = document.getElementById('monday_chart_spending');
const tuesdayChart = document.getElementById('tuesday-chart');
const tuesdayChartSpending = document.getElementById('tuesday_chart_spending');
const wednesdayChart = document.getElementById('wednesday-chart');
const wednesdayChartSpending = document.getElementById('wednesday_chart_spending');
const thursdayChart = document.getElementById('thursday-chart');
const thursdayChartSpending = document.getElementById('thursday_chart_spending');
const fridayChart = document.getElementById('friday-chart');
const fridayChartSpending = document.getElementById('friday_chart_spending');
const saturdayChart = document.getElementById('saturday-chart');
const saturdayChartSpending = document.getElementById('saturday_chart_spending');
const sundayChart = document.getElementById('sunday-chart');
const sundayChartSpending = document.getElementById('sunday_chart_spending');

mondayChart.addEventListener('mouseover', ()=>{
    mondayChartSpending.style.display = 'block'
})
tuesdayChart.addEventListener('mouseover', ()=>{
    tuesdayChartSpending.style.display = 'block'
})
wednesdayChart.addEventListener('mouseover', ()=>{
    wednesdayChartSpending.style.display = 'block'
})
thursdayChart.addEventListener('mouseover', ()=>{
    thursdayChartSpending.style.display = 'block'
})
fridayChart.addEventListener('mouseover', ()=>{
    fridayChartSpending.style.display = 'block'
})
saturdayChart.addEventListener('mouseover', ()=>{
    saturdayChartSpending.style.display = 'block'
})
sundayChart.addEventListener('mouseover', ()=>{
    sundayChartSpending.style.display = 'block'
})


barChart.forEach((chart) => {
    chart.addEventListener('mouseout', () => {
        spending.forEach((amount) => {
            amount.style.display = 'none'
        })
    })
})
