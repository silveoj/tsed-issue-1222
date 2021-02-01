import {Context, ResponseFilter, ResponseFilterMethods} from "@tsed/common";

@ResponseFilter("text/plain") // text/plain for example.
export class MyResponseFilter implements ResponseFilterMethods {
  transform(data: any, ctx: Context) {
    return {
      filter: data
    };
  }
}
