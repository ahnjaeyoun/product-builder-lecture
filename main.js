// 메뉴 데이터
const menuData = [
  // 한식
  { name: "김치찌개", emoji: "🍲", desc: "얼큰하고 깊은 맛, 밥도둑 1등", category: "한식" },
  { name: "된장찌개", emoji: "🫕", desc: "구수한 된장 향이 일품", category: "한식" },
  { name: "불고기", emoji: "🥩", desc: "달콤짭짤한 양념의 부드러운 고기", category: "한식" },
  { name: "비빔밥", emoji: "🍚", desc: "형형색색 나물과 고추장의 조화", category: "한식" },
  { name: "삼겹살", emoji: "🥓", desc: "소주와 함께라면 완벽한 저녁", category: "한식" },
  { name: "제육볶음", emoji: "🌶️", desc: "매콤달콤 돼지고기 볶음", category: "한식" },
  { name: "갈비탕", emoji: "🍖", desc: "진한 국물에 푹 고은 갈비", category: "한식" },
  { name: "순두부찌개", emoji: "🥘", desc: "부들부들 순두부에 달걀 퐁당", category: "한식" },

  // 중식
  { name: "짜장면", emoji: "🍜", desc: "달콤한 춘장 소스의 국민 중식", category: "중식" },
  { name: "짬뽕", emoji: "🌶️", desc: "얼큰한 해물 국물이 시원하게", category: "중식" },
  { name: "탕수육", emoji: "🍗", desc: "바삭한 튀김에 새콤달콤 소스", category: "중식" },
  { name: "마파두부", emoji: "🫘", desc: "얼얼하고 매콤한 두부 요리", category: "중식" },
  { name: "볶음밥", emoji: "🍳", desc: "불맛 가득한 중화 볶음밥", category: "중식" },
  { name: "깐풍기", emoji: "🐔", desc: "바삭하게 튀긴 닭에 매콤한 소스", category: "중식" },

  // 일식
  { name: "초밥", emoji: "🍣", desc: "신선한 생선과 밥의 하모니", category: "일식" },
  { name: "라멘", emoji: "🍜", desc: "진한 돈코츠 육수의 일본 라면", category: "일식" },
  { name: "돈카츠", emoji: "🐷", desc: "바삭한 돈까스와 특제 소스", category: "일식" },
  { name: "우동", emoji: "🍲", desc: "쫄깃한 면발과 깔끔한 국물", category: "일식" },
  { name: "카레", emoji: "🍛", desc: "걸쭉하고 감칠맛 나는 일본식 카레", category: "일식" },
  { name: "규동", emoji: "🥩", desc: "달콤짭짤한 소고기 덮밥", category: "일식" },

  // 양식
  { name: "파스타", emoji: "🍝", desc: "크림? 토마토? 오일? 다 맛있어", category: "양식" },
  { name: "피자", emoji: "🍕", desc: "치즈가 쭈~욱 늘어나는 그 맛", category: "양식" },
  { name: "스테이크", emoji: "🥩", desc: "미디엄 레어로 구운 육즙 가득", category: "양식" },
  { name: "햄버거", emoji: "🍔", desc: "두툼한 패티와 신선한 채소", category: "양식" },
  { name: "리조또", emoji: "🍚", desc: "크리미한 치즈 리조또", category: "양식" },
  { name: "샐러드", emoji: "🥗", desc: "가볍고 건강한 저녁 한 끼", category: "양식" },

  // 분식/야식
  { name: "떡볶이", emoji: "🌶️", desc: "매콤달콤 국민 간식의 정석", category: "분식/야식" },
  { name: "라면", emoji: "🍜", desc: "야식의 왕, 간단하고 확실한 맛", category: "분식/야식" },
  { name: "치킨", emoji: "🍗", desc: "후라이드? 양념? 반반이지!", category: "분식/야식" },
  { name: "김밥", emoji: "🍙", desc: "한 줄이면 든든한 한 끼", category: "분식/야식" },
  { name: "족발", emoji: "🐷", desc: "쫄깃한 족발에 쌈장 한 점", category: "분식/야식" },
  { name: "순대", emoji: "🫕", desc: "당면 가득 찬 고소한 순대", category: "분식/야식" },
];

const categories = ["전체", "한식", "중식", "일식", "양식", "분식/야식"];
const categoryEmojis = {
  "전체": "🍽️",
  "한식": "🇰🇷",
  "중식": "🇨🇳",
  "일식": "🇯🇵",
  "양식": "🇺🇸",
  "분식/야식": "🌙"
};

let currentCategory = "전체";

// DOM 요소
const recommendBtn = document.getElementById("recommend-btn");
const slotMachine = document.getElementById("slot-machine");
const slotDisplay = document.getElementById("slot-display");
const slotEmoji = document.getElementById("slot-emoji");
const slotName = document.getElementById("slot-name");
const slotDesc = document.getElementById("slot-desc");
const slotCategory = document.getElementById("slot-category");
const categoryFilter = document.getElementById("category-filter");
const menuGrid = document.getElementById("menu-grid");
const menuSectionTitle = document.getElementById("menu-section-title");

// 카테고리 필터 버튼 생성
function renderCategoryButtons() {
  categoryFilter.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (cat === currentCategory ? " active" : "");
    btn.textContent = categoryEmojis[cat] + " " + cat;
    btn.addEventListener("click", () => {
      currentCategory = cat;
      renderCategoryButtons();
      renderMenuGrid();
    });
    categoryFilter.appendChild(btn);
  });
}

// 메뉴 카드 그리드 렌더링
function renderMenuGrid() {
  const filtered = currentCategory === "전체"
    ? menuData
    : menuData.filter(m => m.category === currentCategory);

  menuSectionTitle.textContent = currentCategory === "전체"
    ? "전체 메뉴"
    : categoryEmojis[currentCategory] + " " + currentCategory + " 메뉴";

  menuGrid.innerHTML = "";
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML =
      '<div class="card-emoji">' + item.emoji + '</div>' +
      '<div class="card-name">' + item.name + '</div>' +
      '<div class="card-desc">' + item.desc + '</div>' +
      '<span class="card-category">' + item.category + '</span>';
    menuGrid.appendChild(card);
  });
}

// 랜덤 메뉴 추천 (슬롯머신 효과)
function getRandomMenu() {
  const pool = currentCategory === "전체"
    ? menuData
    : menuData.filter(m => m.category === currentCategory);
  return pool[Math.floor(Math.random() * pool.length)];
}

function runSlotMachine() {
  recommendBtn.disabled = true;
  slotMachine.classList.add("active");

  let count = 0;
  const totalSpins = 15;
  const baseInterval = 60;

  function spin() {
    const random = getRandomMenu();
    slotEmoji.textContent = random.emoji;
    slotName.textContent = random.name;
    slotDesc.textContent = "";
    slotCategory.innerHTML = "";
    slotDisplay.classList.remove("spinning");
    void slotDisplay.offsetWidth; // reflow trigger
    slotDisplay.classList.add("spinning");

    count++;
    if (count < totalSpins) {
      const delay = baseInterval + (count * count * 2);
      setTimeout(spin, delay);
    } else {
      // 최종 결과
      const final = getRandomMenu();
      slotEmoji.textContent = final.emoji;
      slotName.textContent = final.name;
      slotDesc.textContent = final.desc;
      slotCategory.innerHTML = '<span>' + final.category + '</span>';
      slotDisplay.classList.remove("spinning");
      recommendBtn.disabled = false;
    }
  }

  spin();
}

// 이벤트 바인딩
recommendBtn.addEventListener("click", runSlotMachine);

// 초기 렌더링
renderCategoryButtons();
renderMenuGrid();
