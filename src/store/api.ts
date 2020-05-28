import "isomorphic-fetch";

export const Api = (url: any, data: any, method?: string) =>
  fetch(url, {
    body: JSON.stringify(data),
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-type": "application/json",
    },
    method: method || "POST",
    mode: "cors",
    redirect: "follow",
    referrer: "no-referrer",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
