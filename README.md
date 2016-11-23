# UPlanner

OHI/O 2016 Hackathon Project - personalized event digest platform for universities and colleges
Hackathon branch version, see main branch for mroe details

## Team

- Stephen Wu - [@wustep](http://github.com/wustep) - 2nd Year Computer Science Engineering Major, General Design Minor
- Stephen Pioro - 2nd Year Industrial Systems and Engineering Major
- Jacob Shoaf - [@shoafj7919](http://github.com/shoafj7919) - 2nd Year Computer Science Engineering Major
- Ishan Taparia - [@itaparia](http://github.com/itaparia) - 1st Year Computer Science Engineering Major

## Description

UPlanner is an OHI/O '16 project creating a prototype for a events platform that:

1. Scrapes multiple different platforms (Google Calendar, TeamUp, others) creating a comprehensive database of every public event on campus from lectures to concerts to sporting events
2. Runs an API webserver allowing queries into the database, pulling events, tags, user preferences, etc.
3. Runs a webserver that presents this information to the client and allows the user to provide preferences that personalize the events

### Tech

- NodeJS
-- Client, Scraper: React
-- Server: Express
- Database: MySQL

## Expansion
- The current method of scraping is immediately creating a SQL query of all the events from the source. To expand, this script would have a client interface that allows the user to approve events or add missing tags or info. 
-- Automation of scraping: the server itself would run the scraping every two weeks and decide tags by itself (based on a table of tagging keywords and conditions). 
-- Users with a certain access level could checek the events to be added and approve them before they are finalized. 
- Crowd-source events with access levels. Allow users to vote on the importance (generality/relevance) of events and request events be added to the database. 
- Users with expanded personalization options and event rating that improves the algorithim (machine learning). 

## Notes
- A lot of initial features are missing in the hackathon version, as we were learning Node & React for the first time. Check out the main branch!
- SSH was used for remote MySQL, but we just ended up using PuTTY during the hackathon instead of a node module
