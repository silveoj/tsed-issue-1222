import {PlatformContext, PlatformTest} from "@tsed/common";
import SuperTest from "supertest";
import {MyResponseFilter} from "../filters/MyResponseFilter";
import {Server} from "../Server";
import {MyController} from "./MyController";

describe("HelloWorldController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;
  let responseFilter: MyResponseFilter;

  beforeEach(
    PlatformTest.bootstrap(Server, {
      mount: {
        "/rest": [MyController]
      }
    })
  );
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
    responseFilter = PlatformTest.get<MyResponseFilter>(MyResponseFilter);

    jest.spyOn(responseFilter, "transform");
  });

  afterEach(PlatformTest.reset);
  afterEach(() => jest.resetAllMocks());

  it("should call GET /rest/scenario-1", async () => {
    const response = await request.get("/rest/scenario-1").expect(200);

    expect(response.headers["content-type"]).toEqual("image/png; charset=utf-8");
    expect(responseFilter.transform).not.toBeCalled();
  });

  it("should call GET /rest/scenario-2", async () => {
    const response = await request.get("/rest/scenario-2").expect(200);

    expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
    expect(response.body).toEqual({
      jsonexample: 1
    });
    expect(responseFilter.transform).not.toBeCalled();
  });

  it("should call GET /rest/scenario-3", async () => {
    const response = await request.get("/rest/scenario-3").expect(200);

    expect(response.headers["content-type"]).toEqual("image/png; charset=utf-8");
    expect(responseFilter.transform).not.toBeCalled();
  });

  it("should call GET /rest/scenario-4", async () => {
    const response = await request.get("/rest/scenario-4").expect(200);

    expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
    expect(responseFilter.transform).not.toBeCalled();
    expect(response.body).toEqual({
      jsonexample: 1
    });
  });

  it("should call GET /rest/scenario-5", async () => {
    const response = await request.get("/rest/scenario-5").expect(200);

    expect(response.headers["content-type"]).toEqual("text/plain; charset=utf-8");
    expect(responseFilter.transform).toHaveBeenCalledWith("text-plain", expect.any(PlatformContext));
    expect(response.text).toEqual('{"filter":"text-plain"}');
  });

  it("should call GET /rest/scenario-6", async () => {
    const response = await request.get("/rest/scenario-6").expect(200);

    expect(response.headers["content-type"]).toEqual("text/plain; charset=utf-8");
    expect(responseFilter.transform).toHaveBeenCalledWith("text-plain", expect.any(PlatformContext));
    expect(response.text).toEqual('{"filter":"text-plain"}');
  });
});
