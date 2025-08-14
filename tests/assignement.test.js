import { expect, test } from "@playwright/test";

const url = "http://localhost:5173";

test("get route", async ({ page }) => {
  test.setTimeout(5000); // etwas mehr Zeit

  const from = "Freiburgstrasse 251, 3018 Bern";
  const to = "Belpstrasse 37, 3008 Bern";

  await page.goto(url);

  await page.getByLabel("from").fill(from);
  await page.getByLabel("to").fill(to);

  await page.getByRole("button").click();

  await expect(page.getByText("Freiburgstrasse")).toBeVisible();
  await expect(page.getByText("Schlossstrasse")).toBeVisible();
  await expect(page.getByText("Belpstrasse")).toBeVisible();
});

