import { test, expect } from '@playwright/test';

test('Navegar a un producto y ver look', async ({ page }) => {
  // Abrir la home de Mango
  await page.goto('https://shop.mango.com/es/es');

  // Aceptar cookies por id (lleva puntos, por eso se usa [id="..."] y no #...)
  await page.locator('[id="cookies.button.acceptAll"]').click();

  // Navegar a la sección de hombre
  await page.getByRole('link', { name: 'Hombre', exact: true }).click();

  // Navegar a la sección de new now
  await page.getByRole('link', { name: 'Descubre más new now' }).click();

  // Navegar al primer producto
  await page.getByRole('link', { name: 'Pantalón traje mezcla lyocell lino slim fit - Plano panorámico' }).click();

  // ver look
  await page.getByRole('button', { name: 'Ver look' }).click();

  // Comprobar que se ha abierto el look
  await expect(page.getByRole('heading', { name: 'Artículos del look' })).toBeVisible();

});