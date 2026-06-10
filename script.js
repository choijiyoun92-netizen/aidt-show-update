const PRODUCTS = [
  { school: "초등학교", subject: "수학", grade: "3학년", semester: "1학기", publisher: "동아출판", company: "동아출판(주)", title: "수학 3-1", author: "나귀수", cover: "cover-orange", updated: "2026-06-10 14:36" },
  { school: "초등학교", subject: "수학", grade: "3학년", semester: "1학기", publisher: "디딤돌교육", company: "(주)디딤돌교육", title: "수학 3-1", author: "최수일", cover: "cover-cream", updated: "2026-06-09 18:22" },
  { school: "초등학교", subject: "수학", grade: "3학년", semester: "1학기", publisher: "비상교육", company: "(주)비상교육", title: "수학 3-1", author: "방정숙", cover: "cover-yellow", updated: "2026-06-10 09:12" },
  { school: "초등학교", subject: "수학", grade: "3학년", semester: "1학기", publisher: "아이스크림미디어", company: "(주)아이스크림미디어", title: "수학 3-1", author: "김성여", cover: "cover-green", updated: "2026-06-08 16:50" },
  { school: "초등학교", subject: "수학", grade: "3학년", semester: "1학기", publisher: "와이비엠", company: "(주)와이비엠", title: "수학 3-1", author: "류희찬", cover: "cover-pink", updated: "2026-06-07 11:08" },
  { school: "초등학교", subject: "수학", grade: "3학년", semester: "1학기", publisher: "지학사", company: "(주)지학사", title: "수학 3-1", author: "강문봉", cover: "cover-lime", updated: "2026-06-06 15:01" },
  { school: "초등학교", subject: "영어", grade: "5학년", semester: "1학기", publisher: "비상교육", company: "(주)비상교육", title: "영어 5-1", author: "이재영", cover: "cover-sky", updated: "2026-06-03 10:42" },
  { school: "초등학교", subject: "영어", grade: "6학년", semester: "2학기", publisher: "천재교육", company: "(주)천재교육", title: "영어 6-2", author: "함순애", cover: "cover-blue", updated: "2026-06-02 13:20" },
  { school: "초등학교", subject: "정보", grade: "5학년", semester: "전학기", publisher: "아이스크림미디어", company: "(주)아이스크림미디어", title: "정보 5", author: "AI 기초", cover: "cover-mint", updated: "2026-05-31 17:10" },
  { school: "중학교", subject: "수학", grade: "1학년", semester: "1학기", publisher: "비상교육", company: "(주)비상교육", title: "수학 1-1", author: "김원경", cover: "cover-yellow", updated: "2026-06-09 09:20" },
  { school: "중학교", subject: "수학", grade: "2학년", semester: "2학기", publisher: "천재교육", company: "(주)천재교육", title: "수학 2-2", author: "류희찬", cover: "cover-purple", updated: "2026-06-04 08:45" },
  { school: "중학교", subject: "영어", grade: "1학년", semester: "1학기", publisher: "동아출판", company: "동아출판(주)", title: "영어 1-1", author: "윤정미", cover: "cover-blue", updated: "2026-06-01 14:02" },
  { school: "중학교", subject: "정보", grade: "1학년", semester: "전학기", publisher: "디딤돌교육", company: "(주)디딤돌교육", title: "정보", author: "디지털 소양", cover: "cover-gray", updated: "2026-05-28 12:22" },
  { school: "고등학교", subject: "수학", grade: "1학년", semester: "전학기", publisher: "비상교육", company: "(주)비상교육", title: "공통수학 1", author: "방정숙", cover: "cover-yellow", updated: "2026-06-08 09:12" },
  { school: "고등학교", subject: "수학", grade: "2학년", semester: "전학기", publisher: "지학사", company: "(주)지학사", title: "공통수학 2", author: "강문봉", cover: "cover-lime", updated: "2026-06-05 10:10" },
  { school: "고등학교", subject: "영어", grade: "1학년", semester: "전학기", publisher: "와이비엠", company: "(주)와이비엠", title: "공통영어 1", author: "박준언", cover: "cover-pink", updated: "2026-06-01 08:41" },
  { school: "고등학교", subject: "정보", grade: "1학년", semester: "전학기", publisher: "천재교육", company: "(주)천재교육", title: "정보", author: "AI 심화", cover: "cover-purple", updated: "2026-05-29 18:03" }
];

const NEWS_ITEMS = [
  {
    id: "notice-web-exhibition",
    category: "공지사항",
    title: "AI 디지털 교육자료 웹 전시관 이용 안내",
    desc: "학교급·과목·학년·학기·발행사별 검색 후 체험 사이트로 이동할 수 있습니다.",
    date: "2026.06.10",
    body: `
      <p>AI 디지털 교육자료 웹 전시관에서는 학교급, 과목, 학년, 학기, 발행사별로 자료를 탐색한 뒤 각 발행사가 제공하는 체험 사이트로 이동할 수 있습니다.</p>
      <h3>주요 이용 방법</h3>
      <ul>
        <li>상단 탭 또는 검색 조건을 이용해 원하는 교육자료를 찾습니다.</li>
        <li>교육자료 카드의 <strong>웹전시본 이동</strong>을 클릭해 체험 사이트로 이동합니다.</li>
        <li>도입 전 필요한 절차는 <strong>도입 및 사용 안내</strong> 탭에서 확인합니다.</li>
      </ul>
      <p>본 게시글은 목업용 예시이며, 실제 운영 시에는 웹 전시관 이용 대상, 접속 유의사항, 체험 링크 정책 등의 내용을 연결해 사용할 수 있습니다.</p>
    `
  },
  {
    id: "press-ai-classroom",
    category: "보도자료",
    title: "교실 속 AI 수업 체험 기회 확대",
    desc: "교사와 학생이 AI 디지털 교육자료를 직접 확인할 수 있는 온라인 전시를 운영합니다.",
    date: "2026.06.03",
    body: `
      <p>AI 디지털 교육자료 웹 전시관은 교사와 학생, 학교 관계자가 다양한 발행사의 AI 디지털 교육자료를 한 자리에서 확인할 수 있도록 구성된 온라인 전시 공간입니다.</p>
      <p>이번 개편을 통해 사용자들은 발행사별 체험 링크뿐 아니라 도입 절차, 자료실, 발행사 문의 경로까지 함께 확인할 수 있게 됩니다.</p>
      <h3>보도자료 핵심 포인트</h3>
      <ul>
        <li>발행사별 체험 동선 일원화</li>
        <li>도입 및 계약 전 확인 정보 제공</li>
        <li>학교 현장에서 활용 가능한 안내 자료 제공</li>
      </ul>
    `
  },
  {
    id: "event-briefing",
    category: "행사 안내",
    title: "AI 디지털 교육자료 활용 설명회 개최",
    desc: "도입 절차, 수업 활용 사례, 발행사별 체험 방법을 안내합니다.",
    date: "2026.05.28",
    body: `
      <p>AI 디지털 교육자료 활용 설명회에서는 서비스 도입 절차, 자료 탐색 방법, 우수 수업 사례, 발행사별 체험 방식 등을 소개합니다.</p>
      <h3>행사 개요</h3>
      <ul>
        <li>대상: 학교 관리자, 교사, 교육 관계자</li>
        <li>주요 내용: 웹 전시관 이용 방법, 자료실 안내, 발행사 문의 경로 소개</li>
        <li>추가 안내: 실제 일정, 장소, 신청 링크는 운영 시점에 맞게 교체</li>
      </ul>
      <p>행사 상세 공지는 실제 운영 게시판에서 별도로 공지하는 형태를 가정한 목업입니다.</p>
    `
  },
  {
    id: "update-resources",
    category: "서비스 업데이트",
    title: "자료실 다운로드 영역 개선",
    desc: "우수 수업 사례집, 홍보 브로슈어, KERIS 포털 가입 안내 자료를 추가했습니다.",
    date: "2026.05.20",
    body: `
      <p>자료실 탭에서는 운영자가 배포하고 싶은 자료를 카드 형태로 제공할 수 있으며, 다운로드 CTA를 통해 각 자료로 연결할 수 있습니다.</p>
      <h3>이번 업데이트 내용</h3>
      <ul>
        <li>우수 수업 사례집 다운로드 카드 추가</li>
        <li>홍보 브로슈어 다운로드 카드 추가</li>
        <li>KERIS 포털 가입 방법 안내 자료 카드 추가</li>
      </ul>
      <p>향후에는 자료 유형, 최신순 정렬, 검색 기능 등을 추가하는 방향으로 확장할 수 있습니다.</p>
    `
  }
];

const STORAGE_KEY = "aidt-showcase-mockup-state-v15";
const DEFAULT_STATE = {
  page: "exhibition",
  school: "초등학교",
  subject: "전체",
  grade: "전체",
  semester: "전체",
  publisher: "전체"
};

let state = loadState();

const pageSections = document.querySelectorAll(".page-section");
const pageButtons = document.querySelectorAll("[data-page-target]");
const schoolTabs = document.querySelectorAll(".school-tab");
const subjectPills = document.querySelector("#subjectPills");
const gradePills = document.querySelector("#gradePills");
const semesterRadios = document.querySelectorAll("input[name='semester']");
const publisherChips = document.querySelectorAll(".publisher-chip");
const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const resetSearch = document.querySelector("#resetSearch");
const newsTabs = document.querySelectorAll(".news-tab");
const newsList = document.querySelector("#newsList");
const newsDetail = document.querySelector("#newsDetail");
const newsDetailCategory = document.querySelector("#newsDetailCategory");
const newsDetailTitle = document.querySelector("#newsDetailTitle");
const newsDetailDate = document.querySelector("#newsDetailDate");
const newsDetailBody = document.querySelector("#newsDetailBody");
const newsBackButton = document.querySelector("#newsBackButton");
const toast = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...DEFAULT_STATE, ...saved };
  } catch (error) {
    return { ...DEFAULT_STATE };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setPage(page) {
  state.page = page;
  pageSections.forEach(section => section.classList.toggle("is-active", section.dataset.page === page));
  pageButtons.forEach(button => button.classList.toggle("is-active", button.dataset.pageTarget === page));
  saveState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getValuesBySchool(key) {
  const values = PRODUCTS
    .filter(product => product.school === state.school)
    .map(product => product[key]);
  return ["전체", ...Array.from(new Set(values))];
}

function renderPillGroup(container, values, key) {
  container.innerHTML = values.map(value => `
    <button type="button" class="pill ${state[key] === value ? "is-active" : ""}" data-filter-key="${key}" data-filter-value="${value}">${value}</button>
  `).join("");

  container.querySelectorAll(".pill").forEach(button => {
    button.addEventListener("click", () => {
      state[key] = button.dataset.filterValue;
      saveState();
      renderControls();
      renderProducts();
    });
  });
}

function renderControls() {
  schoolTabs.forEach(tab => tab.classList.toggle("is-active", tab.dataset.school === state.school));

  const subjectValues = getValuesBySchool("subject");
  const gradeValues = getValuesBySchool("grade");

  if (!subjectValues.includes(state.subject)) state.subject = "전체";
  if (!gradeValues.includes(state.grade)) state.grade = "전체";

  renderPillGroup(subjectPills, subjectValues, "subject");
  renderPillGroup(gradePills, gradeValues, "grade");

  semesterRadios.forEach(radio => {
    radio.checked = radio.value === state.semester;
  });

  publisherChips.forEach(chip => {
    chip.classList.toggle("is-active", chip.dataset.publisher === state.publisher);
  });
}

function matches(value, selected) {
  return selected === "전체" || value === selected;
}

function renderProducts() {
  const filtered = PRODUCTS.filter(product =>
    product.school === state.school &&
    matches(product.subject, state.subject) &&
    matches(product.grade, state.grade) &&
    matches(product.semester, state.semester) &&
    matches(product.publisher, state.publisher)
  );

  resultCount.innerHTML = `총 <b>${filtered.length}</b>개의 교육자료`;

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        선택한 조건에 맞는 교육자료가 없습니다.<br />과목, 학년, 학기, 발행사 조건을 다시 선택해 주세요.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-card__info">
        <span class="product-card__publisher">${product.company}</span>
        <h2>${product.title}</h2>
        <p class="product-card__author">${product.author}</p>
        <a href="#" class="product-card__button" aria-label="${product.company} ${product.title} 웹전시본 이동">웹전시본 이동&nbsp;→</a>
        <span class="product-card__date">최근: ${product.updated}</span>
      </div>
      <div class="book-cover ${product.cover}" aria-hidden="true">
        <span class="book-cover__ai">AI</span>
        <span class="book-cover__title">${product.title.replace(" ", "<br>")}</span>
        <span class="book-cover__subject">${product.subject}</span>
      </div>
    </article>
  `).join("");
}

function resetFilters() {
  state = {
    ...state,
    school: "초등학교",
    subject: "전체",
    grade: "전체",
    semester: "전체",
    publisher: "전체"
  };
  saveState();
  renderControls();
  renderProducts();
  showToast("검색 설정을 초기화했습니다.");
}

pageButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    setPage(button.dataset.pageTarget);
  });
});

schoolTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    state.school = tab.dataset.school;
    state.subject = "전체";
    state.grade = "전체";
    state.semester = "전체";
    state.publisher = "전체";
    saveState();
    renderControls();
    renderProducts();
  });
});

document.querySelector(".brand-wrap").addEventListener("click", () => {
  setPage("exhibition");
  resetFilters();
});

document.querySelector(".brand-wrap").addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setPage("exhibition");
    resetFilters();
  }
});

semesterRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    state.semester = radio.value;
    saveState();
    renderProducts();
  });
});

publisherChips.forEach(chip => {
  chip.addEventListener("click", () => {
    state.publisher = chip.dataset.publisher;
    saveState();
    renderControls();
    renderProducts();
  });
});

resetSearch.addEventListener("click", resetFilters);

document.querySelectorAll("[data-accordion]").forEach(button => {
  button.addEventListener("click", () => {
    const panel = document.querySelector(`[data-accordion-panel='${button.dataset.accordion}']`);
    panel.classList.toggle("is-open");
    button.querySelector(".chevron").textContent = panel.classList.contains("is-open") ? "⌃" : "⌄";
  });
});

document.querySelectorAll(".faq-button").forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.classList.toggle("is-open");
  });
});

let currentNewsCategory = "전체";

function renderNews(category = "전체") {
  currentNewsCategory = category;
  const items = category === "전체" ? NEWS_ITEMS : NEWS_ITEMS.filter(item => item.category === category);
  newsList.hidden = false;
  newsDetail.hidden = true;
  newsList.innerHTML = items.map(item => `
    <article class="news-item">
      <span class="news-item__category">${item.category}</span>
      <button type="button" class="news-item__link" data-news-id="${item.id}">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
      </button>
      <time datetime="${item.date.replaceAll(".", "-")}">${item.date}</time>
    </article>
  `).join("");

  newsList.querySelectorAll("[data-news-id]").forEach(button => {
    button.addEventListener("click", () => {
      openNewsDetail(button.dataset.newsId);
    });
  });
}

function openNewsDetail(newsId) {
  const item = NEWS_ITEMS.find(news => news.id === newsId);
  if (!item) return;
  newsDetailCategory.textContent = item.category;
  newsDetailTitle.textContent = item.title;
  newsDetailDate.textContent = item.date;
  newsDetailDate.setAttribute("datetime", item.date.replaceAll(".", "-"));
  newsDetailBody.innerHTML = item.body;
  newsList.hidden = true;
  newsDetail.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

newsTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    newsTabs.forEach(item => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderNews(tab.dataset.news);
  });
});

if (newsBackButton) {
  newsBackButton.addEventListener("click", () => {
    renderNews(currentNewsCategory);
  });
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-open");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-open"), 1800);
}

document.querySelectorAll("[data-toast]").forEach(button => {
  button.addEventListener("click", () => {
    showToast(`${button.dataset.toast} 연결 영역입니다. 실제 링크 또는 API를 연결해 주세요.`);
  });
});

renderControls();
renderProducts();
renderNews();
setPage(state.page);


const qrModal = document.querySelector("#qrModal");
const qrModalTitle = document.querySelector("#qrModalTitle");
const qrModalDesc = document.querySelector("#qrModalDesc");

function openQrModal(title, desc) {
  if (!qrModal) return;
  qrModalTitle.textContent = title || "카카오톡 채널 QR코드";
  qrModalDesc.textContent = desc || "QR코드를 촬영해 채널을 추가하거나 문의를 시작할 수 있습니다.";
  qrModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeQrModal() {
  if (!qrModal) return;
  qrModal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-qr-title]").forEach(button => {
  button.addEventListener("click", () => {
    openQrModal(button.dataset.qrTitle, button.dataset.qrSubtitle);
  });
});

document.querySelectorAll("[data-qr-close]").forEach(button => {
  button.addEventListener("click", closeQrModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && qrModal && !qrModal.hidden) {
    closeQrModal();
  }
});


async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  }
}

document.querySelectorAll("[data-copy-text]").forEach(button => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copyText || "";
    const success = await copyToClipboard(value);
    showToast(success ? `이메일 주소를 복사했습니다. (${value})` : "복사에 실패했습니다. 다시 시도해 주세요.");
  });
});
