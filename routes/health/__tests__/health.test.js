const request = require("supertest");
const app = require("../../../app");

describe("API health endpoints 'api.abovecurve.com/health'", () => {
  it("'/' should return an object with the message 'Health field.'.", async () => {
    const res = await request(app).get("/health/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toContain("Health field");
  });

});
