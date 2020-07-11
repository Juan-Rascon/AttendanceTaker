# Project-IRX: VILLAIN App for the HERO API
![Project license badge](https://img.shields.io/badge/license-MIT-brightgreen) 

**Client: InsightRX**

The InsightRx event capture service (HERO) needs a UI in order to make it easier to use and to manage. The goal of this project is to create a web application that will be used to manage HERO event capture and perform some simple analysis on the captured event data.

# Actors & Stakeholders

## Apollo or Nova developer (Developer)
```
A developer who is charged with creating new event types 
and generating events of those types that capture what product users 
(i.e. Apollo/Nova) do when they interact with the user interface. 
Using event type definitions, developers should be able to create events 
that correspond to those types that are then emitted to HERO in order 
to capture user behavior.
 ```

**Actor Goals (Developer):**
* Create/Read/Update/Delete event types
* Generate sample events of a registered type for use in instrumenting a product front-end with HERO tracking capability

## Analytics User (User)
```
A product stakeholder who wants to know how the product 
(i.e. Apollo or Nova) is being used by seeing at a minimum a 
time series view of what types of events have been captured and 
some summary metrics around them (min, max, average) over a date range. 
Additionally, they would like to see the details of events over time. 
Users may be  product managers, marketers, or executives who 
are interested in how a product is being used.
```

**Actor Goals (User):**
* Select and view event types for a product
* View events for a product
    * As time chart
    * As pie chart or bar graph
* View the details of an individual event
* Filter viewed events
    * By date range
    * By event properties


# Installation Process

1. Create database: villain_db
2. Locate the root folder of the HERO application, move into it ('cd' command) then run `npm install`.
3. Run `npm start`.
4. Go to http://localhost:3000.
5. Live Application

# Credits
This project was worked on by CALA (California Los Angeles) Technologies.

The team consists of:
	• Carmen Obied ([carmenobied](https://github.com/carmenobied)),
	• Tai Huynh ([jaime-huynh0901](https://github.com/Jaime-Huynh0901)),
	• Pierre André Lowenstein ([abbotkinneydude](https://github.com/@abbotkinneydude)),
	• Alek Valencia ([alek2535](https://github.com/alek2535))
	• Juan Rascon ([jayskratch](https://github.com/jayskratch)).

# License
[MIT](https://choosealicense.com/licenses/mit/)

Copyright © [2020] [CALA Technologies]