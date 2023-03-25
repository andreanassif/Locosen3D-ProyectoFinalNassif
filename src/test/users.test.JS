import supertest from "supertest";
import { expect } from "chai";
import { app } from "../server.js";

const request = supertest(app);

//pruebas endpoints usuarios

describe("api users test", () => {
  it("get users", async () => {
    const response = await request.get("/api/users");
    expect(response.status).equal(200);
  });
});
