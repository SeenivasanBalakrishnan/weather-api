# Weather API

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-adrt5u)

# Weather API

Hi! This is the API created only for **Weather Watch** assignement which are provided by our React JS training. I have used some mock data and data structure to get the value as per our assignment requirement.

## Routes

### Get cities by keyword
- we can search and get all the cities by the name which are maching with the keyword 
Path 
```
baseURL/cities/${cityId}
```
Response
```
[
   {
    id: 1,
    name: 'Chennai'
}
```
Examples:

* [baseURL/cities/3/report?_embed=celsius](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/baseURL/cities/3/report?_embed=celsius)
* [baseURL/cities/3/report?_embed=fahrenheit](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/baseURL/cities/3/report?_embed=fahrenheit)

### Get full reports by cityId and unit
- we can get full weather report by the cityId and unit value
Path 
```
baseURL/cities/${cityId}/report?_embed=${unit}
```

Response
```
[
   {
    id: 1,
    name: 'Chennai'
}
```
Examples:

* [baseURL/cities/3/report?_embed=celsius](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/baseURL/cities/3/report?_embed=celsius)
* [baseURL/cities/3/report?_embed=fahrenheit](https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/baseURL/cities/3/report?_embed=fahrenheit)

For more queries refer https://github.com/typicode/json-server/blob/master/README.md
