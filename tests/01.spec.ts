import { test, expect } from '@playwright/test';

test('al pulsar la bolsa vacia se navega al carrito y se muestra el mensaje', async ({ page }) => {
  // Abrir la home de Mango
  await page.goto('https://shop.mango.com/es/es');

  // Aceptar cookies por id (lleva puntos, por eso se usa [id="..."] y no #...)
  await page.locator('[id="cookies.button.acceptAll"]').click();

  // La bolsa no tiene id ni data-testid, solo clases con hash; por eso va por rol
  await page.getByRole('button', { name: /bolsa/i }).click();

  // Comprobar el texto de la bolsa vacia (sale en mayusculas por CSS, /i lo cubre)
  await expect(page.getByText(/tu bolsa está vacía/i)).toBeVisible();
});