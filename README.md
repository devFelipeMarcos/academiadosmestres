# 🎓 Academia dos Mestres

> Um projeto educacional de e-commerce com integração ao gateway de pagamento AbacatePay, inspirado nos personagens icônicos de "Todo Mundo Odeia o Chris".

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![AbacatePay](https://img.shields.io/badge/AbacatePay-00D4AA?style=for-the-badge&logo=payment&logoColor=white)

## 📋 Sobre o Projeto

A **Academia dos Mestres** é uma aplicação web que simula uma plataforma de cursos online, onde cada "curso" é ministrado por um personagem diferente da série "Todo Mundo Odeia o Chris". O projeto foi desenvolvido para fins educacionais, demonstrando a integração com o gateway de pagamento brasileiro AbacatePay.

### 🎭 Os Mestres

- **🔥 PERIGO** - Malandragem das Ruas (R$ 49,90)
- **💰 JULIUS** - Mestre da Economia (R$ 79,90)
- **🎯 MALVO** - Operações Especiais (R$ 129,90)

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14 com App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Linguagem**: TypeScript
- **Pagamentos**: AbacatePay SDK
- **Deployment**: Vercel (recomendado)

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm
- Conta no AbacatePay

### Passo a passo

1. **Clone o repositório**

```bash
git clone https://github.com/devFelipeMarcos/academiadosmestres
cd academia-dos-mestres
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local`:

```env
TOKEN_API=seu_token_abacatepay_aqui
URL=http://localhost:3000
```

4. **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔧 Configuração do AbacatePay

1. **Crie uma conta** no [AbacatePay](https://abacatepay.com)
2. **Obtenha seu token** no dashboard
3. **Configure o webhook** (opcional) para confirmações automáticas
4. **Adicione o token** nas variáveis de ambiente

### Exemplo de uso da API

```typescript
import { createPayment } from "@/lib/abacatepay";

const billing = await createPayment(
  "Malandragem das Ruas", // nome do plano
  "PERIGO", // personagem
  49.9, // preço
  "cliente@email.com", // email
  "Nome do Cliente", // nome
  "11999999999" // telefone
);
```

## 🎨 Funcionalidades

- ✅ **Seleção de Planos**: Interface intuitiva para escolha de cursos
- ✅ **Formulário de Checkout**: Coleta de dados do cliente
- ✅ **Integração AbacatePay**: Processamento de pagamentos via PIX
- ✅ **Página de Sucesso**: Confirmação com detalhes do pedido
- ✅ **Design Responsivo**: Funciona em desktop e mobile
- ✅ **Tema Dark**: Interface moderna e elegante

## 🌐 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório** ao Vercel
2. **Configure as variáveis de ambiente** no dashboard
3. **Deploy automático** a cada push na main

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ⚠️ Disclaimer

Este é um projeto educacional inspirado na série "Todo Mundo Odeia o Chris". Todos os "cursos" e conteúdos são fictícios e criados apenas para demonstração técnica.

## 📞 Contato

- **GitHub**: [devFelipeMarcos](https://github.com/devFelipeMarcos)
- **LinkedIn**: [Felipe Marcos](https://www.linkedin.com/in/felipemarcosbits/)
- **Email**: felipe.ti404@gmail.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

````

Agora vou criar o texto para o LinkedIn:

```md project="Academia dos Mestres" file="linkedin-post.md" type="markdown"
# Post para LinkedIn

🚀 **Acabei de finalizar um projeto que mistura nostalgia e tecnologia!**

Criei a "Academia dos Mestres" - uma plataforma de e-commerce inspirada nos personagens icônicos de "Todo Mundo Odeia o Chris", onde cada "curso" é ministrado por um personagem diferente:

🔥 **PERIGO** ensina "Malandragem das Ruas"
💰 **JULIUS** compartilha os segredos da "Economia Doméstica"
🎯 **MALVO** revela as "Operações Especiais"

## 🛠️ Stack Técnica:
✅ Next.js 14 com App Router
✅ TypeScript para type safety
✅ Tailwind CSS + shadcn/ui para UI moderna
✅ Integração completa com AbacatePay (gateway brasileiro)
✅ Server Actions para processamento seguro
✅ Design responsivo e tema dark

## 🎯 Principais Features:
• Seleção intuitiva de planos
• Formulário de checkout otimizado
• Processamento de pagamentos via PIX
• Página de confirmação dinâmica
• Fluxo completo de e-commerce

O projeto demonstra como integrar um gateway de pagamento brasileiro em uma aplicação Next.js moderna, mantendo boas práticas de desenvolvimento e UX.

**Foi um projeto super divertido de desenvolver!** Consegui combinar aprendizado técnico com uma pitada de humor nostálgico. 😄

O código está disponível no GitHub para quem quiser dar uma olhada ou contribuir!

#NextJS #TypeScript #TailwindCSS #AbacatePay #WebDevelopment #React #Frontend #Backend #FullStack #BrazilianTech #Ecommerce #PaymentGateway #OpenSource

---

**🔗 Link do projeto:** https://academiadosmestres.vercel.app
**💻 GitHub:** https://github.com/devFelipeMarcos/academiadosmestres

O que acharam da ideia? Já tiveram experiências interessantes integrando gateways de pagamento brasileiros? 👇
````
