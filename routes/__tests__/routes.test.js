const request = require("supertest");
const app = require("../../app");

describe("API basepath endpoints 'api.abovecurve.com'", () => {
  it("'/' should return an object with a specific properties.", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("welcome");
    expect(res.body).toHaveProperty("dataSets");
    expect(res.body).toHaveProperty("links");
    expect(res.body).toHaveProperty("help");
  });

  it("'/ping' should return an object with a message property.", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });

  it("'/health' should return an object with a message property.", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });
});
