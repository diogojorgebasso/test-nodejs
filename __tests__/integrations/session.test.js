const request = require("supertest");
const { User } = require("../../src/models");

describe("auth", () => {
  it("should auth with valid credential", async () => {
    const user = User.create({
      name: "Diogo",
      email: "diogo@ensinu.com.br",
      passwordHash: "123123",
    });
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123456" });

    expect(response.status).toBe(200);
  });
});
