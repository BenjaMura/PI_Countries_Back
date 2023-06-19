import { describe, it, expect } from "vitest";
import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe("Countries routes", () => {
  describe("GET /countries", () => {
    it("GET /countries should return an array of countries", async () => {
      const response = await request.get("/countries");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("GET /countries/:id", () => {
    it("should return a country by id", async () => {
      const country = "ARG";
      const response = await request.get(`/countries/${country}`);
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.id).toBe(country);
    });
  });

  describe("GET /countries/name", () => {
    it("must return an array of countries that contain the specified string in their names", async () => {
      const countryName = "en";
      const response = await request.get(`/countries/name?name=${countryName}`);
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body)).toBe(true);
      response.body.forEach((country) => {
        expect(country.name.toLowerCase()).toContain(countryName.toLowerCase());
      });
    });
  });
});