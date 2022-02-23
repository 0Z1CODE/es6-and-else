const publication = (title, author, pubDate) => {
 console.log(`Title: ${title} Author: ${author} $: ${pubDate}`);
};

export const create = (title, author, pubDate) => {
  let publicApi = {
    print() {
      publication(title, author, pubDate);
    },
  };
  return publicApi
};
