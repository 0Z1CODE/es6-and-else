import {create as newPost} from "./blogpost.mjs"

let post  = newPost(
  "1 text",
  "2 some",
  "3 test",
  "4 input",
) 
post.print();