const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

function getData(){

fetch('data.json')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        appendData(data)
    })
    .catch(function (err) {
        console.log('error: ' + err)
    });

    if (daily.classList.contains('active')) {
        function appendData(data) {
            var mainContainer = document.getElementsByClassName("time")            
            var previous = document.getElementsByClassName('previous')
            var interval = document.getElementsByClassName('interval')
    
            for (var i = 0; i < data.length; i++) {
                for (var i = 0; i < mainContainer.length; i++) {
                    for (var i = 0; i < previous.length; i++) {
                        mainContainer[i].innerHTML = data[i].timeframes.daily.current + 'hrs'
                        previous[i].innerHTML = data[i].timeframes.daily.previous + 'hrs'
                    }

                    for (var i = 0; i < interval.length; i++) {
                        interval[i].innerHTML = data[i].timeframes.daily.interval
                    }
                }
            }
        }
    } else if (weekly.classList.contains('active')) {
        function appendData(data) {
            var mainContainer = document.getElementsByClassName("time")            
            var previous = document.getElementsByClassName('previous')
            var interval = document.getElementsByClassName('interval')
    
            for (var i = 0; i < data.length; i++) {
                for (var i = 0; i < mainContainer.length; i++) {
                    for (var i = 0; i < previous.length; i++) {
                        mainContainer[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                        previous[i].innerHTML = data[i].timeframes.weekly.previous + 'hrs'
                    }

                    for (var i = 0; i < interval.length; i++) {
                        interval[i].innerHTML = data[i].timeframes.weekly.interval
                    }
                }
            }
        }
    } else if (monthly.classList.contains('active')) {
        function appendData(data) {
            var mainContainer = document.getElementsByClassName("time")            
            var previous = document.getElementsByClassName('previous')
            var interval = document.getElementsByClassName('interval')
    
            for (var i = 0; i < data.length; i++) {
                for (var i = 0; i < mainContainer.length; i++) {
                    for (var i = 0; i < previous.length; i++) {
                        mainContainer[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                        previous[i].innerHTML = data[i].timeframes.monthly.previous + 'hrs'
                    }

                    for (var i = 0; i < interval.length; i++) {
                        interval[i].innerHTML = data[i].timeframes.monthly.interval
                    }
                }
            }
        }
    }
}

getData()

const selectLinkDaily = document.getElementById('linkDaily')
const selectLinkWeekly = document.getElementById('linkWeekly')
const selectLinkMonthly = document.getElementById('linkMonthly')

selectLinkDaily.addEventListener('click', function(event){
    daily.classList.add("active");
    weekly.classList.remove("active");
    monthly.classList.remove("active");
    event.preventDefault();
    getData()
})

selectLinkWeekly.addEventListener('click', function(event){
    daily.classList.remove("active");
    weekly.classList.add("active");
    monthly.classList.remove("active");
    event.preventDefault();
    getData()
})

selectLinkMonthly.addEventListener('click', function(event){
    daily.classList.remove("active");
    weekly.classList.remove("active");
    monthly.classList.add("active");
    event.preventDefault();
    getData()
})
