import {Controller, Get, PlatformResponse, Res} from "@tsed/common";
import {Returns} from "@tsed/schema";

@Controller("/")
export class MyController {
  @Get("/scenario-1")
  @(Returns(200).ContentType("image/png"))
  public scenario1() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5/hPwAIAgL/4d1j8wAAAABJRU5ErkJggg==";
  }

  @Get("/scenario-2")
  @(Returns(200).ContentType("application/json"))
  public scenario2() {
    return {
      jsonexample: 1
    };
  }


  @Get("/scenario-3")
  public scenario3(@Res() response: PlatformResponse) {
    response.setHeader("content-type", "image/png");
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5/hPwAIAgL/4d1j8wAAAABJRU5ErkJggg==";
  }

  @Get("/scenario-4")
  public scenario4() {
    return {
      jsonexample: 1
    };
  }

  @Get("/scenario-5")
  @(Returns(200).ContentType("text/plain"))
  public scenario5() {
    return "text-plain";
  }

  @Get("/scenario-6")
  public scenario6(@Res() response: PlatformResponse) {
    response.setHeader("content-type", "text/plain");
    return "text-plain";
  }
}
