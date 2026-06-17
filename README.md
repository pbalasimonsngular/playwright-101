# Playwright 101

Proyecto de introducción a [Playwright](https://playwright.dev/) con tests end-to-end sobre la tienda de [Mango](https://shop.mango.com/es/es).

## Requisitos previos

- Node.js 18+
- npm

## Instalación

```bash
npm install
npx playwright install
```

## Tests disponibles

| Archivo | Descripción |
|---|---|
| `tests/01.spec.ts` | Abre la home, pulsa la bolsa vacía y valida el mensaje de carrito vacío |
| `tests/02.spec.ts` | Navega a un producto de hombre y verifica que se abre el look |
| `tests/03.spec.ts` | Test en blanco (work in progress) |

Los tests se ejecutan en **Firefox** y **WebKit** (Safari) tal como está configurado en `playwright.config.ts`.

---

## Comandos que necesitas

### 1. Test `01.spec.ts` sin UI (normal)

```bash
npx playwright test tests/01.spec.ts
```

### 2. Test `02.spec.ts` con UI

```bash
npx playwright test tests/02.spec.ts --ui
```

### 3. Generar `03.spec.ts` con Codegen sobre Mango

```bash
npx playwright codegen https://shop.mango.com/es/es
```
