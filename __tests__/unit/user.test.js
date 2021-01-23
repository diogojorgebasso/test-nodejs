const { User } = require("../../src/models/index");
const bcrypt = require("bcryptjs");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });
  it("should encrypt user password", async () => {
    const user = User.create({
      name: "Diogo",
      email: "diogo@ensinu.com.br",
      password: "123123",
    });
    const hash = await bcrypt.hash("123456", 8);
    expect(await bcrypt.compare("132456", user.passwordHash)).toBe(hash);
  });
});
