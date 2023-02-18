import supertest from "supertest";
import {expect} from "chai";
import {app} from "../server.js"

const request = supertest(app)

//pruebas endpoints usuarios

describe("api products test",()=>{
    it("get products", async ()=>{
        const response = await request.get("/api/products");
        //console.log(response);
        expect(response.status).equal(200)
    })
})
