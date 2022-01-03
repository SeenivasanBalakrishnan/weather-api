
# Weather API

Hi!
The Mock API was created from *[json-server](https://github.com/typicode/json-server)** for the **Weather Watch** app assignment which is provided by the React JS trainer. As per the requirement, I have structured the mock data in the `db.json` file. And by passing the valuable queries, you can fetch the mock cities and weather reports as json format.

***Base API URL:*** https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/

## Routes

### Get cities by keyword
- we can search and get all the cities by the name which are maching with the keyword 

Query:
```
baseURL/cities?name_like=${keywod}
```
Examples:
* [baseURL/cities?name_like=Che](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities?name_like=Che)
* [baseURL/cities?name_like=Ban](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities?name_like=Ban)

Response:
```json
[
  {
    "id": 1,
    "name": "Chennai"
  },
  {
    "id": 2,
    "name": "Chengalpattu"
  },
  {
    "id": 3,
    "name": "Chethpattu"
  }
]
```


### Get full reports by cityId and unit
- we can get full weather report by the cityId and unit value

Query:
```
baseURL/cities/${cityId}/report?_embed=${unit}
```
Examples:
* [baseURL/cities/3/report?_embed=celsius](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities/3/report?_embed=celsius)
* [baseURL/cities/4/report?_embed=fahrenheit](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities/4/report?_embed=fahrenheit)

Response:
```json
[
  {
    "id": 4,
    "cityId": 4,
    "location": "Bangalore",
    "conditions": "Cloud Slight Rain",
    "icon": "https://seenivasanbalakrishnan.github.io/images/weather_icon_cloud_slight_rain.svg",
    "relative_icon": "/images/weather_icon_cloud_slight_rain.svg",
    "feels_like": 23,
    "wind_speed": 4.6,
    "wind_direction": 130,
    "pressure": 2150,
    "humidity": 38,
    "fahrenheit": [
      {
        "id": 4,
        "reportId": 4,
        "temp": 77,
        "temp_max": 79,
        "temp_min": 72
      }
    ]
  }
]
```

### More Routes
* To get all cities list - [baseURL/cities/](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities)
* To get single city by id - [baseURL/cities/:id](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities/2) 
* To get all reports - [baseURL/report/](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/report) 
* To get single report by id - [baseURL/report/:id](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/report/4)

For more queries refer https://github.com/typicode/json-server/blob/master/README.md
