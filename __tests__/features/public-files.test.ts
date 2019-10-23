/* eslint-env jest */
import { readFileSync } from "fs";
import fetch from "node-fetch";

describe("Public files", () => {
  const baseUrl = `http://localhost:${parseInt(process.env.PORT || "3000")}`;

  test("GET /service-worker.js responds with a 200 status", async () => {
    const response = await fetch(`${baseUrl}/service-worker.js`);

    expect(response.status).toEqual(200);
  });

  test("GET /manifest.json responds with a 200 status", async () => {
    const response = await fetch(`${baseUrl}/manifest.json`);

    expect(response.status).toEqual(200);
  });

  test("GET /manifest.json returns the JSON manifest file", async () => {
    const response = await fetch(`${baseUrl}/manifest.json`);

    await expect(response.buffer()).resolves.toEqual(
      readFileSync(`${__dirname}/../../public/manifest.json`)
    );
  });
});
