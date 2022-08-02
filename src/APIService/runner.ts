
class Runner {
  performGET(url: string, queryParams?: any) {
    return this.performInternal(url, "GET", null, queryParams);
  }
  performPOST(url: string, data?: any) {
    return this.performInternal(url, "POST", data);
  }
  performPUT(url: string, data?: any) {
    return this.performInternal(url, "PUT", data);
  }
  async performInternal(url: string = "", method: string = "GET", data: any = {}, queryParams?: any) {
    const token = sessionStorage.getItem("token");
    if (token) {
      queryParams = { auth: token, ...queryParams };
    }
    if (queryParams) {
      let serializedString = "",
        serializedArray = [];
      for (let key in queryParams) {
        serializedArray.push(`${key}=${queryParams[key]}`);
      }
      serializedString = serializedArray.join("&");
      url = `${url}?${serializedString}`;
    }
    const config: RequestInit = {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    // Default options are marked with *
    const response = await fetch(url, config);
    return response.json(); // parses JSON response into native JavaScript objects
  }
}

export default Runner;
