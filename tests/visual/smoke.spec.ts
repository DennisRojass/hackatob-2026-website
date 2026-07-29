import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";

/**
 * Minimal smoke — expand after redesign lots.
 * Animations should be disabled via prefers-reduced-motion in playwright config.
 */
test.describe("HackaToB smoke", () => {
  test("home loads and shows primary CTA", async ({ page }: { page: Page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /dejar interés|postularme/i }).first()).toBeVisible();
  });

  test("postular route loads", async ({ page }) => {
    await page.goto("/postular");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
