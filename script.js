const projects = [
  {
    id: "dashboard-comercial",
    title: "Dashboard Comercial",
    category: "Planilhas & Dashboards",
    featured: true,
    description: "Painel para acompanhar leads, funil, vendas, conversão e principais indicadores comerciais.",
    tools: ["Excel", "Google Sheets", "Dados"],
    status: "Projeto demonstrativo",
    url: "#"
  },
  {
    id: "crm-pipeline",
    title: "CRM & Pipeline",
    category: "Comercial & CRM",
    featured: true,
    description: "Estrutura de acompanhamento de leads, etapas, follow-up, prioridades e oportunidades.",
    tools: ["CRM", "Planilhas", "Processos"],
    status: "Projeto demonstrativo",
    url: "#"
  },
  {
    id: "central-atendimento",
    title: "Central de Atendimento",
    category: "Atendimento & Suporte",
    featured: true,
    description: "Controle de tickets com categoria, prioridade, responsável, status e acompanhamento de SLA.",
    tools: ["Atendimento", "SAC", "SLA"],
    status: "Projeto demonstrativo",
    url: "#"
  },
  {
    id: "automacao-ia",
    title: "Automação com IA",
    category: "IA & Automações",
    featured: true,
    description: "Fluxo de apoio para classificar solicitações, organizar informações e acelerar respostas.",
    tools: ["IA", "Automação", "Processos"],
    status: "Projeto demonstrativo",
    url: "#"
  },
  {
    id: "controle-operacional",
    title: "Controle Operacional",
    category: "Operações & Processos",
    featured: false,
    description: "Painel de tarefas, prazos, responsáveis e pendências para dar visibilidade à rotina operacional.",
    tools: ["Excel", "Organização", "Operações"],
    status: "Em preparação",
    url: "#"
  },
  {
    id: "sites-paginas",
    title: "Sites & Páginas",
    category: "Sites & Páginas",
    featured: false,
    description: "Espaço para reunir sites e páginas desenvolvidos, com acesso direto a cada projeto.",
    tools: ["Web", "HTML", "CSS"],
    status: "Receber projetos",
    url: "#"
  },
  {
    id: "outros-projetos",
    title: "Outros projetos",
    category: "Outros",
    featured: false,
    description: "Área reservada para novos trabalhos, experiências práticas e materiais que complementem o portfólio.",
    tools: ["Em definição"],
    status: "Receber projetos",
    url: "#"
  }
];

const featuredGrid = document.querySelector("#featured-grid");
const allGrid = document.querySelector("#all-projects-grid");
const filters = document.querySelector("#filters");
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

function projectCard(project, isFeatured) {
  const tools = project.tools.map(function(tool) {
    return '<span class="tool">' + tool + '</span>';
  }).join("");

  const action = project.url && project.url !== "#"
    ? '<a class="open-project" href="' + project.url + '" target="_blank" rel="noopener">Abrir projeto ↗</a>'
    : '<a class="open-project" href="#contato" onclick="showComingSoon()">Adicionar link ↗</a>';

  return '<article class="project-card ' + (isFeatured ? "featured" : "") + '">' +
    '<div>' +
      '<div class="project-top">' +
        '<span class="project-number">' + project.id + '</span>' +
        '<span class="project-tag">' + project.category + '</span>' +
      '</div>' +
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.description + '</p>' +
      '<div class="project-meta">' + tools + '</div>' +
    '</div>' +
    '<div class="project-footer">' +
      '<span class="status">' + project.status + '</span>' +
      action +
    '</div>' +
  '</article>';
}

function renderFeatured() {
  featuredGrid.innerHTML = projects.filter(function(project) {
    return project.featured;
  }).map(function(project) {
    return projectCard(project, true);
  }).join("");
}

function renderFilters() {
  const categories = ["Todos"].concat(Array.from(new Set(projects.map(function(project) {
    return project.category;
  }))));

  filters.innerHTML = categories.map(function(category, index) {
    return '<button class="filter ' + (index === 0 ? "active" : "") + '" data-category="' + category + '">' + category + '</button>';
  }).join("");

  filters.querySelectorAll(".filter").forEach(function(button) {
    button.addEventListener("click", function() {
      filters.querySelectorAll(".filter").forEach(function(item) {
        item.classList.remove("active");
      });
      button.classList.add("active");
      renderAll(button.dataset.category);
    });
  });
}

function renderAll(category) {
  category = category || "Todos";
  const visible = category === "Todos"
    ? projects
    : projects.filter(function(project) {
        return project.category === category;
      });

  allGrid.innerHTML = visible.map(function(project) {
    return projectCard(project, false);
  }).join("");
}

function showComingSoon() {
  const toast = document.querySelector("#toast");
  toast.textContent = "Este link será adicionado quando o material estiver no portfólio.";
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(function() {
    toast.classList.remove("show");
  }, 2600);
}

renderFeatured();
renderFilters();
renderAll();