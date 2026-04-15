

## Problema

O favicon atual aponta para `/lovable-uploads/7e62d546-7941-4689-90de-32194554a299.png`, mas existe um `public/favicon.ico` antigo que os navegadores e o Google buscam automaticamente por padrão (`/favicon.ico`), sobrescrevendo o favicon configurado.

Além disso, faltam as tags para `apple-touch-icon` e tamanhos alternativos (16x16, 32x32), que já existem como arquivos no projeto.

## Plano

Vou fazer apenas alterações no `index.html`:

1. **Remover o `public/favicon.ico` antigo** — ele sobrescreve o favicon correto da Climb Up
2. **Atualizar as tags de favicon** no `<head>` do `index.html` para incluir todos os formatos necessários:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/favicon-16x16.png">
<link rel="icon" href="/lovable-uploads/7e62d546-7941-4689-90de-32194554a299.png" type="image/png">
<link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/apple-touch-icon-180x180.png">
```

Isso garante que o Google e todos os navegadores (incluindo mobile) exibam o favicon correto da Climb Up.

