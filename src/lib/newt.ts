import { createClient } from "newt-client-js";

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
export interface Article {
  title: string;
  slug: string;
  body: string;
}
