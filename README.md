# Simulador ANAC PPA — 1.500 Questões

Projeto web/PWA para estudo de Piloto Privado.

## Arquivos

- `index.html` — aplicativo completo, com o banco de 1.500 questões embutido.
- `manifest.json` — configuração do aplicativo instalável.
- `service-worker.js` — funcionamento offline/cache.
- `icon-192.png` — ícone PWA.
- `icon-512.png` — ícone PWA.

## Acesso

Chave: `PPA2026`

## Banco

- Teoria de Voo — 300
- Conhecimentos Técnicos — 300
- Navegação Aérea — 300
- Regulamentos — 300
- Meteorologia — 300

**Total: 1.500 questões.**

As questões são autorais para estudo/simulado e não são o banco oficial da ANAC.

## Publicar no GitHub Pages

1. Crie ou abra o repositório no GitHub.
2. Envie **todos os arquivos desta pasta** para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve.
7. Aguarde a publicação e abra o endereço do GitHub Pages.

Depois de publicado por HTTPS, o navegador poderá oferecer a instalação do PWA.

## Teste local

Para testar o HTML no PC, abra `index.html` no Chrome/Edge.
Para testar o PWA/service worker, use o endereço publicado pelo GitHub Pages.
