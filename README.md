# ideal-weather
Ideal Weather Messaging System

The idea for this app is to connect to a weather API and pull the next day's forecast, and then connect to Twillio and text me the ideal weather hours for tomorrow (if any), based on my location.

Steps to build:
1. Create basic node server code - test local
2. Create AWS EC2 instance to host server
   - Create new instance
   - Get node running
   - Test get request
   - Migrade node server
3. Create weather api connection (openweather)
4. Parse weather forecast received
5. Create ideal weather conditions
6. Create twillio text connection
7. Create message to twillio of ideal weather or no good weather found - send every night

## How it's made:
JavaScript - nodejs, expressjs

## Optimizations:
## Lessons Learned:
