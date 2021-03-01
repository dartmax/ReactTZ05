import {ArticlesFromUrl} from "./mockData";

export function getDataFromApi() {
   let response = JSON.parse(ArticlesFromUrl)
      if (response.status >= 400) {
        throw response;
      }
      return response.list;
}
