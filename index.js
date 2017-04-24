function getData(){
    var endpoint = 'https://data.lacity.org/resource/x4zi-qhep.json';

    fetch(endpoint)
    .then(function(data){
        return data.json();
    }) 
    .then(function(json){
        console.log(json);
        
        console.log(json[0]) // logs a specific event into console
        console.log(json[0].event_name) // logs the event name into console
        
        // 2015-11-11T19:30:00.000
        var dateArray1 = json[0].event_date_time_start.split('-'); // ["2015", "11", "11T19:30:00.000"]
        var dayNumberArray1 = dateArray1[2].split('T'); // ["11","19:30:00.000"]
        var date1 = dateArray1[1] + '/' + dayNumberArray1[0] + '/' + dateArray1[0];
        
        var event1 = document.getElementById('event-1');
        event1.innerHTML = `
            <li>Date: ${date1}</li>
            <li>Event Name: ${json[0].event_name}</li>
            <li>Type: ${json[0].type_of_event}</li>
            <li>Fee: ${json[0].fee_required}</li>
            <li>City Reference Id: ${json[0].city_reference_id}</li>
        `;
        
        var finalHTML = '';
        
        json.forEach(function(item) {
            var listOfEvents = `
                <li>
                  ${item.event_name}
                </li>
            `;
            
            finalHTML += listOfEvents;
        });
        
        var list = document.getElementById("listOfEvents");
        list.innerHTML = finalHTML;
    })
    .catch(function(error){
        console.log(error);
    });
}