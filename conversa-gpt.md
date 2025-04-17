# Pergunta

gpt, estou criando uma página web e nessa página eu tenho alguns links em um nav, dispostos na horizontal. eu removi a estilização padrão dos links pois quero criar um efeito nesses links. o efeito que estou tentando fazer é uma borda inferior crescendo a partir do centro do objeto no momento do hover. como eu posso fazer esse efeito utilizando somente css ?

# Resposta

Você consegue criar esse efeito de borda inferior "crescendo a partir do centro" no hover usando **CSS puro** com `::after` e algumas transições. Aqui está um exemplo simples e personalizável:

### 💡 HTML:
```html
<nav>
  <a href="#">Início</a>
  <a href="#">Sobre</a>
  <a href="#">Serviços</a>
  <a href="#">Contato</a>
</nav>
```

### 🎨 CSS:
```css
nav a {
  position: relative;
  text-decoration: none;
  color: #000;
  padding: 8px 12px;
}

nav a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

nav a:hover::after {
  width: 100%;
}
```

### 🧠 Como funciona:
- O `::after` cria um pseudo-elemento abaixo do link.
- Ele começa com `width: 0` e `left: 50%`, alinhado no centro.
- No hover, a `width` vai para `100%`, e como o `left` continua sendo 50% com `transform: translateX(-50%)`, o efeito visual é a **borda crescendo para os lados a partir do centro**.

Se quiser personalizar (cor, espessura da borda, duração da animação, etc.), é só ajustar os valores no CSS.

Quer que eu te ajude a adaptar isso pro seu estilo atual? Se puder mandar como estão seus links agora, posso ajustar certinho!
---

