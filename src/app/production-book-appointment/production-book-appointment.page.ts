import { Component, OnInit } from '@angular/core';
import 'calConfig';

@Component({
  selector: 'app-production-book-appointment',
  templateUrl: './production-book-appointment.page.html',
  styleUrls: ['./production-book-appointment.page.scss'],
})
export class ProductionBookAppointmentPage implements OnInit {
  eventsG;
  eventList = [];
  summary ;
  title ;
  startDate;
  endDate;
  startTime;
  endTime;
  location;
  description
  constructor(private calConfig : CalConfig) { }

  ngOnInit() {
  }



/**
 * Logic to handle the visibility of the Create Event Form
 */
 showCreateEventForm() {
    var x = document.getElementById("create_event_block");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 





/**
 *  On load, called to load the auth2 library and API client library.
 */
 handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
 initClient() {
    gapi.client.init({
        apiKey: this.calConfig.API_KEY,
        clientId:this.calConfig.CLIENT_ID,
        discoveryDocs: this.calConfig.DISCOVERY_DOCS,
        scope: this.calConfig.SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

        // Handle the initial sign-in state.
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function (error) {
        this.appendPre(JSON.stringify(error, null, 2));
    });
}


/**
 *  Sign in the user upon button click.
 */
handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
 handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
appendPre(eventListArr) {

    var finalHtml = "";
    console.log(eventListArr);
    var pre = document.getElementById('content');

    eventListArr.forEach(function (event) {
        var htmlStr = `
    <div  class="ui card" style = "margin: 10px 30px 2rem 2rem;">
    <div class="date_Card">`+
    new Date(event.startDateTime).getDate()
    +`</div>
    <div class="content">
      <a class="header">`+ event.summary + `</a>
      <div class="meta">
        <p class="date">`+ new Date(event.startDateTime) + `</p>
        <p class="date">`+ event.location + `</p>
        </div>
      <div class="description" style="word-wrap: break-word;">`+
            event.description +
            `</div>
        </div>
        <div class="extra content">
        <i class="circular  calendar outline icon"></i>
        <span>`+
            event.creatorEmail +
            `</span>
        </div>
        </div>`
        finalHtml = finalHtml + htmlStr
    });

    pre.innerHTML = finalHtml;
}



/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
 listUpcomingEvents() {
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMax': (new Date(2019, 12, 24, 10, 33, 30, 0).toISOString()),
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(function (response) {
        var events = response.result.items;
        this.eventsG = events;

        console.log(events);

        if (events.length > 0) {
            for (let i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                    when = event.start.date;
                }
                // console.log(event.creator.displayName, event.creator.email, event.end.dateTime, event.start.dateTime, event.status, event.summary);
                this.eventList.push(new CalEvent(event.creator.email, event.description, event.start.dateTime, event.location, event.status, event.summary))
            }
            this.appendPre(this.eventList);
        } else {
            this.appendPre('No upcoming events found.');
        }
    });
}


 createEvent() {


    var event = {
        'summary':this.summary,
        'location': this.location,
        'description': this.discription,
        'start': {
            'dateTime': new Date(this.startDate+`:`+this.startTime).toISOString(),
        },
        'end': {
            'dateTime': new Date(this.endDate+`:`+this.endTime).toISOString(),
        },
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'debanjana.maitra@gmail.com',
        'resource': event
    });
    console.log(event);
    request.execute(function (event) {
        var htmlString =
            document.getElementById('banner').innerHTML = "<button><a href=" + event.htmlLink + ">Event created</button>";
    });
}

}
