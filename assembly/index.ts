import { logging, Context } from "near-sdk-as";

export function getString(str: string):string{
  logging.log(`${Context.sender} said ${str}`);
  return str;
}