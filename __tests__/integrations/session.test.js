const request = require("supertest");
const { User } = require("../../src/models");
const truncate = require("../utils/truncate");
describe("auth", () => {
  beforeEach(async () => await truncate());
  it("should auth with valid credential", async () => {
    const user = User.create({
      name: "Diogo",
      email: "diogo@ensinu.com.br",
      password: "123123",
    });
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });

    expect(response.status).toBe(200);
  });
  it("Should not auth with invalid credentials", async () => {
    const user = User.create({
      name: "Diogo",
      email: "diogo@ensinu.com.br",
      password: "123123",
    });
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });

    expect(response.status).toBe(401);
  });
  it("Should receive JWT token when auth", async () => {
    const user = User.create({
      name: "Diogo",
      email: "diogo@ensinu.com.br",
      password: "123123",
    });
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });
  });
  expect(response.body).toHaveProperty("token");
});
