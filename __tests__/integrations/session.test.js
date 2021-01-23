const request = require("supertest");
const factory = require("../factories");
const truncate = require("../utils/truncate");

describe("auth", () => {
  beforeEach(async () => await truncate());

  it("should auth with valid credential", async () => {
    const user = await factory.create("User");
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });

    expect(response.status).toBe(200);
  });

  it("Should not auth with invalid credentials", async () => {
    const user = await factory.create("User");
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });

    expect(response.status).toBe(401);
  });

  it("Should receive JWT token when auth", async () => {
    const user = await factory.create("User");
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });
    expect(response.body).toHaveProperty("token");
  });
});
