import { create as createPub } from "./publication.mjs";

const printDatails = (pub, URL) => {
  pub.print()
  console.log(URL);
}

export const create = (title, author, pubDate, URL) => {
  let pub = createPub(title, author, pubDate)
  let publicApi = {
    print() {
      printDatails(pub, URL)
    }
  }
  return publicApi
}