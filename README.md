# Portfólio — Iago Caetano Nascimento

Site estático do portfólio profissional.

## Estrutura

- index.html — página principal
- styles.css — layout e visual
- script.js — projetos, filtros e links

## Como adicionar um projeto

Abra script.js e adicione um objeto dentro de projects:

    {
      id: "nome-do-projeto",
      title: "Nome do projeto",
      category: "Categoria",
      featured: false,
      description: "Descrição curta e objetiva.",
      tools: ["Excel", "Google Sheets"],
      status: "Projeto demonstrativo",
      url: "https://..."
    }

Para um projeto aparecer na primeira seção, use featured: true.

## Observação

Projetos demonstrativos devem ser identificados como demonstrativos. O portfólio não deve apresentar trabalhos fictícios como experiência de cliente ou emprego real.
