---
title: Using JSON and APIs
---

JavaScript Object Notation (JSON) is currently the most common data format used by APIs and you will have to be able to understand JSON in order to be able make use of most third-party APIs out there. So what exactly **is** JSON? It's syntax that stores and transmit data in an easy format for humans and computers to understand.

Here are a few browser extensions that will aid you when working with an API so you can easily read the returned information:

- [Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
- [Firefox Extension](https://addons.mozilla.org/en-us/firefox/addon/jsonview/)

Every value in JSON will always be separated by a comma. Here are the data formats that JSON supports:

- `array` - A list of the same (preferrably) data types. Each value inside of the `[]` must be separated by a comma
- `boolean` - True or false value
- `null` - A value does not exist
- `number` - Any number, including decimals
- `object` - A key/value pair setup. Each pair is separated with a comma (`,`) and all of the pairs are surrounded by curly braces (`{}`)
- `string` - Any text, surrounded by double quotes (`"`)

```json
{
  "array": [
    1,
    2,
    3
  ],
  "boolean": true,
  "null": null,
  "number": 123,
  "object": {
    "a": "b",
    "c": "d",
    "e": "f"
  },
  "string": "Hello World"
}
```

## Usage

A good majority of APIs will have documentation on how to use their APIs and they will often follow a similar syntax in both making API calls and how to read the documentation. In this lesson, we will be using the [OMDb API](http://www.omdbapi.com/), which is a movie searching database similar to IMDB but is intended for public use.

Under the "Usage" section of the OMDb website, it states to send all requests to the following URL:

```
http://www.omdbapi.com/?
```

All URL calls will always have a domain and, possibly, a path with a question mark (`?`) at the end. After the question mark, you will input your parameters that will be submitted in your API call. An API call is whenever you submit information (a query) and data is returned whether it's what you intended or it may be an error.

I would like to get information about "Finding Dory" and so I have two options:

1. Search for "Finding Dory" on IMDB and get the unique ID for the movie. From reading the documentation of OMDb, I've learned that the format of the unique ID is in the format of: `tt1234567`. I then look up the movie on IMDB and notice in the URL that I have what I'm looking for.

    ```
    http://www.imdb.com/title/tt2277860/
    ```
1. I can use the OMDb "By Search" documentation and search for the movie itself without of having to go through the effort of searching IMDb. The only downside to this is I don't know how many results we'll receive if we choose a very generic search term.

### Option #1

In the OMDb documentation, it has the following information:

| Parameter | Required | Description     |
| --------- | -------- | --------------- |
| `i`       | Optional | A valid IMDb ID |
{: .table }

I have all of the information that I need, I know which parameter to use in my API call and what value to give it. The `i` parameter is given after the question mark and the equals sign is used to specify what value to give it.

```
http://www.omdbapi.com/?i=tt2277860
```

If I just copy that URL into any browser (preferrably one with a JSON viewer extension), I'll receive the following JSON. We'll be able to use this JSON programmatically meaning we can write code to understand this and make it look pretty to the average user.

```json
{
  "Title": "Finding Dory",
  "Year": "2016",
  "Rated": "PG",
  "Released": "17 Jun 2016",
  "Runtime": "103 min",
  "Genre": "Animation, Adventure, Comedy",
  "Director": "Andrew Stanton, Angus MacLane",
  "Writer": "Andrew Stanton (original story by), Andrew Stanton (screenplay), Victoria Strouse (screenplay), Bob Peterson (additional screenplay material by), Angus MacLane (additional story material by)",
  "Actors": "Ellen DeGeneres, Albert Brooks, Ed O'Neill, Kaitlin Olson",
  "Plot": "The friendly-but-forgetful blue tang fish reunites with her loved ones, and everyone learns a few things about the real meaning of family along the way.",
  "Language": "English, Indonesian",
  "Country": "USA",
  "Awards": "N/A",
  "Poster": "http://ia.media-imdb.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg",
  "Metascore": "77",
  "imdbRating": "8.2",
  "imdbVotes": "13,158",
  "imdbID": "tt2277860",
  "Type": "movie",
  "Response": "True"
}
```

### Option # 2

In the OMDb documentation, it states that I can search for movies by title and this will save me time from going to IMDb and getting the actual ID for it **but** it may not be as accurate as getting the ID manually.

| Parameter | Required | Description               |
| --------- | -------- | ------------------------- |
| `s`       | Yes      | Movie title to search for |
{: .table }

So for this option, we will be using the `s` parameter and we'll give it a value. Notice, the `%20` is the equivalent of a space in a URL because spaces cannot exist in a URL.

```
http://www.omdbapi.com/?s=Finding%20Dory
```

After we copy this URL and put in our browser, we'll give this JSON:

```json
{
  "Search": [
    {
      "Title": "Finding Dory",
      "Year": "2016",
      "imdbID": "tt2277860",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg"
    },
    {
      "Title": "Finding Dory",
      "Year": "2016",
      "imdbID": "tt2948370",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg"
    }
  ],
  "totalResults": "2",
  "Response": "True"
}
```

This is why it was mentioned that it may not be as accurate. With this example, we can see that OMDb has two separate entries for "Finding Dory" and we would have to make separate API calls to each of those `imdbID` values to see what the difference between the information is. This saved us the step of going to IMDb and getting the ID but it introduced a new step for us to programmatically display both results or make separate API calls.

## On Your Own

The City of Santa Monica provides information regarding [parking lots and parking meters in real-time](https://parking.api.smgov.net/) available to the public for both private and commercial use. The documentation is similar to OMDb with the exception of making use of another syntax that is used widely across APIs.

The API states that there is a `/lots/:id` endpoint available and what this means is that the following URL is available for use. The `:id` means it should be replaced by actual value and should not be in the actual URL when you make your API call.

```
https://parking.api.smgov.net/lots/:id
```

If the API is designed in a well thought-out manner, then we can assume there will be another URL that provides us **all** of the lots:

```
https://parking.api.smgov.net/lots
```

By using this API call, we can see all of the lots being tracked by the API and you may notice that each lot entry has an `id` value. For example, the first lot has an id of `667276` so we can now build the following URL and get data **solely** for that lot.

```
https://parking.api.smgov.net/lots/667276
```

This API defaults to returning XML instead of JSON but it is simple enough to understand. In a future lesson, we will be using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) for making API calls and we'll be able to control the returned data in a better fashion. Read through the API documentation for the parking data and see if you can sorts of information you can discover.