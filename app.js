const C = CONFIG;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const PH = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f6d3d9"/><text x="200" y="210" font-family="serif" font-size="26" fill="#b8955a" text-anchor="middle">Manu Caakes</text></svg>');
const img = (src, alt, cls = "") => `<img ${cls ? `class="${cls}"` : ""} src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${PH}'">`;
const zap = msg => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
const set = (id, t) => $(id).textContent = t;

document.title = `${C.nome} | Confeitaria artesanal`;
set("logoTxt", C.nome);
$("heroImg").src = C.hero.foto; $("heroImg").alt = C.hero.titulo;
$("heroImg").onerror = function () { this.onerror = null; this.src = PH; };
set("heroTitulo", C.hero.titulo); set("heroTexto", C.hero.texto);
document.querySelectorAll("[data-zap]").forEach(a => { a.href = zap(C.mensagemPedido); a.target = "_blank"; a.rel = "noopener"; });

/* Menu hambúrguer */
const burger = $("burger"), menu = $("menu");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("aberto"));
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("aberto"); burger.setAttribute("aria-expanded", false); } };

/* Destaques com filtro */
set("bolosTitulo", C.produtos.titulo);
const ativos = C.produtos.lista.filter(p => p.ativo !== false);
let filtro = "todos";
const htmlParcelamentos = (p, i, contexto) => {
  const d = p.detalhes || {};
  if (d.mostrarParcelamento === false) return "";
  const valores = d.valoresCartao || [];
  const conteudo = valores.length && d.tamanhos?.length
    ? "<p>Os valores no cartão aparecem na coluna ao lado dos valores à vista. Parcelamento em até 4x.</p>"
    : valores.length
      ? `<p>À vista: ${esc(p.preco)} · Cartão: ${esc(valores[0])}. Parcelável em até 4x.</p>`
    : "<p>Consulte os valores no cartão.</p>";
  const id = `parcelamentos-${contexto}-${i}`;
  return `<div class="area-parcelas"><button type="button" class="parcelas-toggle" data-parcelas-toggle data-tabela="tabela-precos-${contexto}-${i}" aria-expanded="false" aria-controls="${id}">Ver parcelamentos no cartão</button><div class="parcelamentos" id="${id}" hidden>${conteudo}</div></div>`;
};
const alternaParcelamentos = e => {
  const botao = e.target.closest("[data-parcelas-toggle]");
  if (!botao) return false;
  const painel = document.getElementById(botao.getAttribute("aria-controls"));
  if (!painel) return false;
  painel.hidden = !painel.hidden;
  const tabela = document.getElementById(botao.dataset.tabela);
  tabela?.querySelectorAll("[data-cartao-col]").forEach(celula => celula.hidden = painel.hidden);
  botao.setAttribute("aria-expanded", String(!painel.hidden));
  botao.textContent = painel.hidden ? "Ver parcelamentos no cartão" : "Ocultar parcelamentos";
  return true;
};
function desenha() {
  $("chips").innerHTML = C.produtos.categorias.map(c => `<button role="tab" class="${c.id === filtro ? "on" : ""}" data-c="${c.id}">${esc(c.nome)}</button>`).join("");
  $("produtos").innerHTML = ativos.map((p, i) => ({ p, i })).filter(({ p }) => filtro === "todos" || p.categoria === filtro).map(({ p, i }) => `
    <article class="card"><div class="foto">${img(p.foto, p.nome)}</div>
      <div class="rotulo"><h3>${esc(p.nome)}</h3><p>${esc(p.descricao)}</p><span class="preco">${esc(p.preco)}</span></div>
      <div class="acoes"><button class="btn btn-linha" data-mais="${i}">Ler mais</button>
        <a class="btn btn-ouro" href="${zap(`Olá! Gostaria de pedir: ${p.nome}.`)}" target="_blank" rel="noopener">Pedir</a></div>
    </article>`).join("");
}
$("chips").onclick = e => { const b = e.target.closest("[data-c]"); if (b) { filtro = b.dataset.c; desenha(); } };
desenha();

/* Detalhes ("Ler mais") */
const det = $("detalhe");
const fechaDet = () => { det.classList.remove("on-m"); document.body.style.overflow = ""; };
$("produtos").addEventListener("click", e => {
  if (alternaParcelamentos(e)) return;
  const b = e.target.closest("[data-mais]"); if (!b) return;
  const i = +b.dataset.mais, p = ativos[i], d = p.detalhes || {};
  $("dFoto").src = p.foto; $("dFoto").alt = p.nome; $("dFoto").onerror = function () { this.onerror = null; this.src = PH; };
  set("dNome", p.nome); set("dPreco", p.preco); set("dDesc", d.descricaoLonga || p.descricao);
  const col = d.colunas || ["Tamanho", "À vista", "Cartão"];
  const valores = d.valoresCartao || [];
  const tabelaId = `tabela-precos-detalhe-${i}`;
  const cabecalhos = `${col.map(c => `<th>${esc(c)}</th>`).join("")}${valores.length ? '<th data-cartao-col hidden>Cartão</th>' : ""}`;
  const linhas = d.tamanhos?.map((l, linha) => `<tr>${l.map(c => `<td>${esc(c)}</td>`).join("")}${valores.length ? `<td data-cartao-col hidden>${esc(valores[linha] || "")}</td>` : ""}</tr>`).join("");
  $("dTabela").innerHTML = `${linhas ? `<table class="tabela" id="${tabelaId}"><thead><tr>${cabecalhos}</tr></thead><tbody>${linhas}</tbody></table>` : ""}${htmlParcelamentos(p, i, "detalhe")}`;
  $("dObs").hidden = !d.observacoes?.length;
  $("dObs").innerHTML = d.observacoes?.length ? `<ul>${d.observacoes.map(o => {
    const titulo = /:\s*$/.test(o);
    const categoria = /especial/i.test(o) ? " especial" : /tradicional|inclus/i.test(o) ? " tradicional" : "";
    return `<li${titulo ? ` class="obs-titulo${categoria}"` : ""}>${esc(o)}</li>`;
  }).join("")}</ul>` : "";
  $("dPedir").href = zap(`Olá! Gostaria de pedir: ${p.nome}.`);
  det.classList.add("on-m"); document.body.style.overflow = "hidden"; $("dFechar").focus();
});
det.addEventListener("click", e => alternaParcelamentos(e));
$("dFechar").onclick = fechaDet;
det.addEventListener("click", e => { if (e.target === det) fechaDet(); });

/* Galeria */
set("galTitulo", C.galeria.titulo);
const fotos = C.galeria.fotos;
const gal = $("grid-gal");
let fotoGalAtual = 0;
function desenhaGal() {
  $("grid-gal").innerHTML = fotos.map((x, i) => `<button data-i="${i}" aria-label="Ampliar foto ${i + 1} de ${fotos.length}: ${esc(x.legenda)}">${img(x.foto, x.legenda)}</button>`).join("");
  $("galAnt").hidden = fotos.length < 2;
  $("galProx").hidden = fotos.length < 2;
  $("galPosicao").hidden = fotos.length < 2;
  atualizaGalPosicao();
}
desenhaGal();
function atualizaGalPosicao() {
  $("galPosicao").textContent = fotos.length ? `${fotoGalAtual + 1} de ${fotos.length}` : "";
  $("galAnt").disabled = fotoGalAtual <= 0;
  $("galProx").disabled = fotoGalAtual >= fotos.length - 1;
}
function vaiParaFotoGal(i) {
  fotoGalAtual = Math.max(0, Math.min(i, fotos.length - 1));
  const item = gal.children[fotoGalAtual];
  if (item) {
    const left = gal.scrollLeft + item.getBoundingClientRect().left - gal.getBoundingClientRect().left
      + item.offsetWidth / 2 - gal.clientWidth / 2;
    gal.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  atualizaGalPosicao();
}
gal.addEventListener("scroll", () => {
  if (!gal.children.length) return;
  const galLeft = gal.getBoundingClientRect().left;
  const centroGal = gal.scrollLeft + gal.clientWidth / 2;
  let distancia = Infinity;
  [...gal.children].forEach((item, i) => {
    const distanciaItem = Math.abs(gal.scrollLeft + item.getBoundingClientRect().left - galLeft
      + item.offsetWidth / 2 - centroGal);
    if (distanciaItem < distancia) {
      distancia = distanciaItem;
      fotoGalAtual = i;
    }
  });
  atualizaGalPosicao();
}, { passive: true });
$("galAnt").onclick = () => vaiParaFotoGal(fotoGalAtual - 1);
$("galProx").onclick = () => vaiParaFotoGal(fotoGalAtual + 1);
const lb = $("lightbox"); let atualFoto = 0;
const mostra = i => { atualFoto = (i + fotos.length) % fotos.length; const x = fotos[atualFoto]; $("lbImg").src = x.foto; $("lbImg").alt = x.legenda; set("lbLegenda", x.legenda); lb.classList.add("on-m"); };
const fechaLb = () => lb.classList.remove("on-m");
$("grid-gal").addEventListener("click", e => { const b = e.target.closest("button"); if (b) mostra(+b.dataset.i); });
$("lbAnt").onclick = () => mostra(atualFoto - 1); $("lbProx").onclick = () => mostra(atualFoto + 1); $("lbFechar").onclick = fechaLb;
lb.addEventListener("click", e => { if (e.target === lb) fechaLb(); });
let pausaGal = false;
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
gal.addEventListener("pointerdown", () => pausaGal = true);
["pointerup", "pointercancel"].forEach(ev => document.addEventListener(ev, () => pausaGal = false));
setInterval(() => {
  if (fotos.length > 1 && !pausaGal && !gal.matches(":hover") && !gal.contains(document.activeElement)
    && !movimentoReduzido.matches && !document.hidden && !lb.classList.contains("on-m")) {
    vaiParaFotoGal((fotoGalAtual + 1) % fotos.length);
  }
}, 3500);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { fechaLb(); fechaDet(); }
  if (lb.classList.contains("on-m")) { if (e.key === "ArrowLeft") mostra(atualFoto - 1); if (e.key === "ArrowRight") mostra(atualFoto + 1); }
});

/* Quem somos */
set("sobreTitulo", C.sobre.titulo);
$("sobreTextos").innerHTML = C.sobre.blocos.map(b => `<div class="tracejado"><h3>${esc(b.titulo)}</h3><p>${esc(b.texto)}</p></div>`).join("");
$("sobreFotos").innerHTML = C.sobre.fotos.map((s, i) => `<div class="foto-tracejada">${img(s, `Sobre nós ${i + 1}`)}</div>`).join("");

/* Depoimentos */
set("depoTitulo", C.feedbacks.titulo);
const depos = C.feedbacks.lista.filter(d => d.ativo !== false);
$("carrossel").innerHTML = depos.map(d => `
  <article class="depo">${d.foto ? img(d.foto, d.nome, "avatar") : `<span class="avatar">${esc(d.nome[0])}</span>`}
    <div><span class="estrelas" aria-label="${d.estrelas} de 5 estrelas">${"★".repeat(d.estrelas)}${"☆".repeat(5 - d.estrelas)}</span>
    <strong>${esc(d.nome)}</strong><p>“${esc(d.texto)}”</p></div>
  </article>`).join("");
$("pontos").innerHTML = depos.map((_, i) => `<button data-i="${i}" aria-label="Depoimento ${i + 1}"></button>`).join("");
const car = $("carrossel"), pts = [...$("pontos").children]; let at = 0, pausa = false;
const centro = c => c.offsetLeft - car.offsetLeft - (car.clientWidth - c.clientWidth) / 2;
const ir = i => { at = (i + depos.length) % depos.length; car.scrollTo({ left: centro(car.children[at]), behavior: "smooth" }); };
car.addEventListener("scroll", () => {
  let m = 0, dist = 1e9;
  [...car.children].forEach((c, i) => { const d = Math.abs(centro(c) - car.scrollLeft); if (d < dist) { dist = d; m = i; } });
  at = m; pts.forEach((p, i) => p.classList.toggle("ativo", i === m));
}, { passive: true });
pts.forEach(p => p.onclick = () => ir(+p.dataset.i));
$("carAnt").onclick = () => ir(at - 1); $("carProx").onclick = () => ir(at + 1);
["pointerdown", "focusin", "mouseenter"].forEach(ev => car.addEventListener(ev, () => pausa = true));
["pointerup", "focusout", "mouseleave"].forEach(ev => car.addEventListener(ev, () => pausa = false));
setInterval(() => { if (!pausa && depos.length > 1) ir(at + 1); }, 5000);
pts[0]?.classList.add("ativo");

/* Contato */
const ct = C.contato;
set("contatoTitulo", ct.titulo);
$("info").innerHTML = `
  <div><b>WhatsApp</b><a href="${zap(C.mensagemPedido)}" target="_blank" rel="noopener">${esc(ct.whatsappExibido)}</a></div>
  <div><b>Telefone</b><a href="tel:${ct.telefone.replace(/\D/g, "")}">${esc(ct.telefone)}</a></div>
  <div><b>Instagram</b><a href="${esc(ct.instagramLink)}" target="_blank" rel="noopener">${esc(ct.instagram)}</a></div>
  <div><b>Horário</b>${esc(ct.horario)}</div>
  <div style="grid-column:1/-1"><b>Endereço</b>${esc(ct.endereco)}</div>`;
set("rodape", `© ${new Date().getFullYear()} ${C.nome}`);
$("form").addEventListener("submit", e => {   // sem servidor: envia pelo WhatsApp
  e.preventDefault();
  const x = new FormData(e.target);
  window.open(zap(`Olá! Meu nome é ${x.get("nome")}.\nE-mail: ${x.get("email")}\nTelefone: ${x.get("tel") || "-"}\n\n${x.get("msg")}`), "_blank", "noopener");
  e.target.reset();
});
