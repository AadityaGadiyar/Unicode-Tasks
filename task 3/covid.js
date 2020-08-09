class covid {
  async getRequest() {
    const response = await fetch(
      "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
          "x-rapidapi-key":
            "97e6d6c9ecmsh579f037dd5c4312p113f6ajsn108839417ddf",
        }
      }
    );

    const data = await response.json();

    return data;
  }}