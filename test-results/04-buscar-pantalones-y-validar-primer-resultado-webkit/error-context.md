# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04.spec.ts >> buscar pantalones y validar primer resultado
- Location: tests/04.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/search\/mujer\?q=pantalones/i
Received string:  "https://shop.mango.com/es/es/search/mujer"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://shop.mango.com/es/es/search/mujer"

```

```yaml
- banner:
  - link "Saltar al contenido principal":
    - /url: "#page-content-layer"
  - navigation:
    - list:
      - listitem:
        - link "Mujer":
          - /url: /es/es/h/mujer
        - button "Mujer"
      - listitem:
        - link "Hombre":
          - /url: /es/es/h/hombre
        - button "Hombre"
      - listitem:
        - link "Teen":
          - /url: /es/es/h/teen
        - button "Teen"
      - listitem:
        - link "Niños":
          - /url: /es/es/h/ninos
        - button "Niños"
      - listitem:
        - link "Home":
          - /url: /es/es/h/home
        - button "Home"
  - link "Home":
    - /url: /es/es
    - img "MANGO"
  - list:
    - listitem:
      - link "Buscar":
        - /url: /es/es/search/mujer
    - listitem:
      - link "Iniciar sesión":
        - /url: /es/es/login
      - button "Iniciar sesión"
    - listitem:
      - link "Favoritos":
        - /url: /es/es/favorites
    - listitem:
      - button "Bolsa (0)"
- main:
  - search:
    - search:
      - combobox "Buscar"
      - button "Cerrar" [expanded]:
        - img "Clear input"
  - heading "Buscar" [level=1]
  - paragraph
  - paragraph: Te puede interesar
  - button "Anterior" [disabled]
  - button "Siguiente"
  - list:
    - listitem:
      - link "Shorts rectos rayas - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/shorts-y-bermudas/casual/shorts-rectos-rayas/37031494/52/00
        - img "Shorts rectos rayas - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "32"
        - button "34"
        - button "36"
        - button "38"
        - button "40"
        - button "42"
        - button "44"
        - button "46"
      - paragraph: Shorts rectos rayas
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio actual [29,99 € ]
    - listitem:
      - link "Falda lyocell nido de abeja - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/faldas/largas/falda-lyocell-nido-de-abeja/27098661/70/00
        - img "Falda lyocell nido de abeja - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "XXS"
        - button "XS"
        - button "S"
        - button "M"
        - button "L"
        - button "XL"
        - button "XXL"
      - paragraph: Falda lyocell nido de abeja
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio inicial tachado [35,99 € ] Precio actual [25,99 € ]
    - listitem:
      - link "Jeans bombacho tiro alto - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/pantalones/bombachos/jeans-bombacho-tiro-alto/37091409/TC/00
        - img "Jeans bombacho tiro alto - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "32"
        - button "34"
        - button "36"
        - button "38"
        - button "40"
        - button "42"
        - button "44"
        - button "46"
      - paragraph: Jeans bombacho tiro alto
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio actual [39,99 € ]
    - listitem:
      - link "Braguita bikini brasileña lunares - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/bikinis-y-banadores/bikinis/braguita-bikini-brasilena-lunares/27084414/30/00
        - img "Braguita bikini brasileña lunares - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "XS"
        - button "S"
        - button "M"
        - button "L"
      - paragraph: Braguita bikini brasileña lunares
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio actual [19,99 € ]
    - listitem:
      - link "Chaleco botones bolsillos - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/tops/chalecos/chaleco-botones-bolsillos/37041431/05/00
        - img "Chaleco botones bolsillos - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "XXS"
        - button "XS"
        - button "S"
        - button "M"
        - button "L"
        - button "XL"
        - button "XXL"
      - paragraph: Chaleco botones bolsillos
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio actual [35,99 € ]
    - listitem:
      - link "Jeans wide leg tiro medio - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/vaqueros/tallas-plus/jeans-wide-leg-tiro-medio/37031379/TC/00
        - img "Jeans wide leg tiro medio - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "32"
        - button "34"
        - button "36"
        - button "38"
        - button "40"
        - button "42"
        - button "44"
        - button "46"
        - button "48"
        - button "50"
        - button "52"
        - button "54"
      - paragraph: Jeans wide leg tiro medio
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio actual [29,99 € ]
    - listitem:
      - link "Set 2 collares combinados - Artículo sin modelo":
        - /url: https://shop.mango.com/es/es/p/mujer/bisuteria/collares/set-2-collares-combinados/37081365/OR/00
        - img "Set 2 collares combinados - Artículo sin modelo"
      - group "Tallas":
        - text: Tallas
        - button "Talla única"
      - paragraph: Set 2 collares combinados
      - button "Guardar como favorito":
        - img "Guardar como favorito"
      - text: Precio actual [15,99 € ]
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
  - heading "Recibe promociones exclusivas, ventas privadas y novedades" [level=2]
  - text: E-mail
  - textbox "E-mail":
    - /placeholder: ""
  - paragraph
  - button "Suscribirme"
  - paragraph:
    - text: Al suscribirte, confirmas que has leído la
    - button "Política de privacidad"
    - text: .
- complementary "Assistant":
  - button "Assistant":
    - img "Assistant"
- contentinfo:
  - button "España (Península y Baleares) Castellano"
  - list:
    - listitem:
      - link "Instagram":
        - /url: http://instagram.com/mango
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/mango.com/
    - listitem:
      - link "YouTube":
        - /url: https://www.youtube.com/user/mangoFashion/
    - listitem:
      - link "TikTok":
        - /url: https://www.tiktok.com/@mango
    - listitem:
      - link "Spotify":
        - /url: https://open.spotify.com/user/mango_official
    - listitem:
      - link "Pinterest":
        - /url: https://www.pinterest.es/mangofashion/
    - listitem:
      - link "X":
        - /url: https://twitter.com/Mango
    - listitem:
      - link "LinkedIn":
        - /url: https://es.linkedin.com/company/mango
  - list:
    - listitem:
      - link "Ayuda":
        - /url: /es/es/help
    - listitem:
      - link "Trabaja con nosotros":
        - /url: https://jobs.mango.com/
    - listitem:
      - link "Días especiales":
        - /url: /es/es/events
    - listitem:
      - link "Mango Style Club":
        - /url: /es/es/mango-style-club
    - listitem:
      - link "Mis compras":
        - /url: /es/es/my-purchases
    - listitem:
      - link "Prensa":
        - /url: https://mangofashiongroup.com/portada-prensa
    - listitem:
      - link "RESPONSABILIDAD":
        - /url: /es/es/responsibility
    - listitem:
      - link "Discover":
        - /url: /es/es/discover
    - listitem:
      - link "Devoluciones":
        - /url: /es/es/help/returns
    - listitem:
      - link "Mango Outlet":
        - /url: https://www.mangooutlet.com/
    - listitem:
      - link "Tarjeta regalo":
        - /url: /es/es/gift-voucher
    - listitem:
      - link "Tiendas":
        - /url: /es/es/stores
    - listitem:
      - link "Empresa":
        - /url: https://mangofashiongroup.com/
    - listitem:
      - link "Site map":
        - /url: /es/es/sitemap
  - list:
    - listitem:
      - link "Política de Privacidad y Cookies":
        - /url: /es/es/privacy-policy
    - listitem:
      - link "Condiciones de venta":
        - /url: /es/es/terms-and-conditions
    - listitem:
      - link "Canal ético":
        - /url: https://mango.edenuncias.com/Inicio.aspx
  - paragraph: © 2026 MANGO Todos los derechos reservados
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('buscar pantalones y validar primer resultado', async ({ page }) => {
  4  |   await page.goto('https://shop.mango.com/es/es', { waitUntil: 'domcontentloaded' });
  5  | 
  6  |   // El banner puede variar por locale, así que se usa un selector compuesto.
  7  |   const acceptCookiesButton = page
  8  |     .locator('[id="cookies.button.acceptAll"], button:has-text("Aceptar todas"), button:has-text("Accept all")')
  9  |     .first();
  10 | 
  11 |   if (await acceptCookiesButton.isVisible({ timeout: 8000 }).catch(() => false)) {
  12 |     await acceptCookiesButton.click();
  13 |   }
  14 | 
  15 |   await page.getByRole('link', { name: /buscar/i }).first().click();
  16 | 
  17 |   const searchInput = page.getByRole('combobox', { name: /buscar/i });
  18 |   await expect(searchInput).toBeVisible();
  19 |   await searchInput.fill('pantalones');
  20 |   await searchInput.press('Enter');
  21 | 
> 22 |   await expect(page).toHaveURL(/\/search\/mujer\?q=pantalones/i);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  23 | 
  24 |   const firstProductTitle = page
  25 |     .locator('form[class*="ProductCard-module"] p[class*="ProductTitle-module"]')
  26 |     .first();
  27 | 
  28 |   await expect(firstProductTitle).toBeVisible();
  29 |   await expect(firstProductTitle).toHaveText('Pantalón wide leg lino');
  30 | });
```