import {ResponseFilter, ResponseFilterMethods} from "@tsed/common";

@ResponseFilter("*/*")
export class MyResponseFilter2 implements ResponseFilterMethods {
  transform(data: any) {
    return {
      filter2: data
    };
  }
}
