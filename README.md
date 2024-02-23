# ideal-weather
Ideal Weather Messaging System

The idea for this app is to connect to a weather API and pull the next day's forecast, and then connect to Twillio and text me the ideal weather hours for tomorrow (if any), based on my location.

Steps to build:
1. Create basic node server code - test local
2. Create AWS EC2 instance to host server
  a. Create new instance
  b. Get node running
  c. Test get request
  d. Migrade node server
4. Create weather api connection (openweather)
5. Parse weather forecast received
6. Create ideal weather conditions
7. Create twillio text connection
8. Create message to twillio of ideal weather or no good weather found - send every night

## How it's made:
JavaScript (nodejs)

## Optimizations:
## Lessons Learned:
