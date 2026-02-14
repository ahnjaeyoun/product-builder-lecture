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
  { name: "잡채", emoji: "🍠", desc: "당면과 채소의 달콤한 잔치 음식", category: "한식" },
  { name: "감자탕", emoji: "🦴", desc: "뼈다귀 우린 걸쭉한 국물의 매력", category: "한식" },
  { name: "닭갈비", emoji: "🐔", desc: "매콤한 양념에 볶은 닭과 채소", category: "한식" },
  { name: "부대찌개", emoji: "🌭", desc: "햄, 라면, 김치의 얼큰한 조합", category: "한식" },
  { name: "칼국수", emoji: "🍜", desc: "손으로 밀어 만든 쫄깃한 면발", category: "한식" },
  { name: "낙지볶음", emoji: "🐙", desc: "불맛 가득 매콤한 낙지 요리", category: "한식" },
  { name: "보쌈", emoji: "🥬", desc: "부드러운 수육을 쌈에 싸서 한입", category: "한식" },
  { name: "육개장", emoji: "🥵", desc: "얼큰한 국물에 대파와 소고기 듬뿍", category: "한식" },
  { name: "해물파전", emoji: "🦐", desc: "바삭하게 부친 해물 가득 전", category: "한식" },
  { name: "찜닭", emoji: "🍗", desc: "간장 양념에 졸인 닭과 당면", category: "한식" },
  { name: "곱창볶음", emoji: "🔥", desc: "쫄깃한 곱창에 매콤한 양념", category: "한식" },
  { name: "설렁탕", emoji: "🥛", desc: "뽀얀 사골 국물의 깊은 맛", category: "한식" },

  // 중식
  { name: "짜장면", emoji: "🍜", desc: "달콤한 춘장 소스의 국민 중식", category: "중식" },
  { name: "짬뽕", emoji: "🌶️", desc: "얼큰한 해물 국물이 시원하게", category: "중식" },
  { name: "탕수육", emoji: "🍗", desc: "바삭한 튀김에 새콤달콤 소스", category: "중식" },
  { name: "마파두부", emoji: "🫘", desc: "얼얼하고 매콤한 두부 요리", category: "중식" },
  { name: "볶음밥", emoji: "🍳", desc: "불맛 가득한 중화 볶음밥", category: "중식" },
  { name: "깐풍기", emoji: "🐔", desc: "바삭하게 튀긴 닭에 매콤한 소스", category: "중식" },
  { name: "양장피", emoji: "🥒", desc: "해파리와 채소의 새콤한 냉채", category: "중식" },
  { name: "유린기", emoji: "🍋", desc: "바삭한 닭에 상큼한 파소스", category: "중식" },
  { name: "고추잡채", emoji: "🫑", desc: "고추와 돼지고기의 불맛 볶음", category: "중식" },
  { name: "울면", emoji: "🍲", desc: "걸쭉한 전분 소스의 해물 면요리", category: "중식" },
  { name: "라조기", emoji: "🌶️", desc: "고추기름에 볶아낸 매콤 치킨", category: "중식" },
  { name: "팔보채", emoji: "🦑", desc: "해산물 8가지가 어우러진 볶음", category: "중식" },
  { name: "군만두", emoji: "🥟", desc: "바삭하게 구운 한입 만두", category: "중식" },
  { name: "잡탕밥", emoji: "🍛", desc: "다양한 해물과 채소의 덮밥", category: "중식" },

  // 일식
  { name: "초밥", emoji: "🍣", desc: "신선한 생선과 밥의 하모니", category: "일식" },
  { name: "라멘", emoji: "🍜", desc: "진한 돈코츠 육수의 일본 라면", category: "일식" },
  { name: "돈카츠", emoji: "🐷", desc: "바삭한 돈까스와 특제 소스", category: "일식" },
  { name: "우동", emoji: "🍲", desc: "쫄깃한 면발과 깔끔한 국물", category: "일식" },
  { name: "카레", emoji: "🍛", desc: "걸쭉하고 감칠맛 나는 일본식 카레", category: "일식" },
  { name: "규동", emoji: "🥩", desc: "달콤짭짤한 소고기 덮밥", category: "일식" },
  { name: "사시미", emoji: "🐟", desc: "싱싱한 회 한 점의 행복", category: "일식" },
  { name: "오코노미야키", emoji: "🥞", desc: "철판 위 일본식 부침개", category: "일식" },
  { name: "타코야키", emoji: "🐙", desc: "동글동글 문어 들어간 간식", category: "일식" },
  { name: "가츠동", emoji: "🍖", desc: "바삭한 돈까스에 달걀 덮밥", category: "일식" },
  { name: "소바", emoji: "🍝", desc: "시원한 메밀 면의 깔끔한 맛", category: "일식" },
  { name: "텐동", emoji: "🍤", desc: "바삭한 튀김 올린 일본식 덮밥", category: "일식" },
  { name: "야키토리", emoji: "🍢", desc: "숯불에 구운 닭꼬치의 풍미", category: "일식" },
  { name: "오니기리", emoji: "🍙", desc: "속 재료 가득 일본식 주먹밥", category: "일식" },

  // 양식
  { name: "파스타", emoji: "🍝", desc: "크림? 토마토? 오일? 다 맛있어", category: "양식" },
  { name: "피자", emoji: "🍕", desc: "치즈가 쭈~욱 늘어나는 그 맛", category: "양식" },
  { name: "스테이크", emoji: "🥩", desc: "미디엄 레어로 구운 육즙 가득", category: "양식" },
  { name: "햄버거", emoji: "🍔", desc: "두툼한 패티와 신선한 채소", category: "양식" },
  { name: "리조또", emoji: "🍚", desc: "크리미한 치즈 리조또", category: "양식" },
  { name: "샐러드", emoji: "🥗", desc: "가볍고 건강한 저녁 한 끼", category: "양식" },
  { name: "감바스", emoji: "🦐", desc: "올리브오일에 새우를 바게트와 함께", category: "양식" },
  { name: "라자냐", emoji: "🧀", desc: "층층이 쌓은 미트소스와 치즈", category: "양식" },
  { name: "뇨끼", emoji: "🥔", desc: "감자로 만든 쫀득한 이탈리안 파스타", category: "양식" },
  { name: "피시앤칩스", emoji: "🐟", desc: "바삭한 생선 튀김과 감자튀김", category: "양식" },
  { name: "그라탕", emoji: "🧈", desc: "오븐에 구운 크림 치즈의 향연", category: "양식" },
  { name: "타코", emoji: "🌮", desc: "고기와 살사로 채운 멕시칸 타코", category: "양식" },
  { name: "브런치 플레이트", emoji: "🥞", desc: "팬케이크, 달걀, 베이컨 한 접시", category: "양식" },
  { name: "폭립", emoji: "🍖", desc: "오랜 시간 훈연한 바비큐 갈비", category: "양식" },

  // 분식/야식
  { name: "떡볶이", emoji: "🌶️", desc: "매콤달콤 국민 간식의 정석", category: "분식/야식" },
  { name: "라면", emoji: "🍜", desc: "야식의 왕, 간단하고 확실한 맛", category: "분식/야식" },
  { name: "치킨", emoji: "🍗", desc: "후라이드? 양념? 반반이지!", category: "분식/야식" },
  { name: "김밥", emoji: "🍙", desc: "한 줄이면 든든한 한 끼", category: "분식/야식" },
  { name: "족발", emoji: "🐷", desc: "쫄깃한 족발에 쌈장 한 점", category: "분식/야식" },
  { name: "순대", emoji: "🫕", desc: "당면 가득 찬 고소한 순대", category: "분식/야식" },
  { name: "튀김", emoji: "🍤", desc: "김말이, 고구마, 새우 바삭 모듬", category: "분식/야식" },
  { name: "오뎅탕", emoji: "🍢", desc: "따끈한 국물에 어묵 한 꼬치", category: "분식/야식" },
  { name: "핫도그", emoji: "🌭", desc: "소세지에 반죽 입혀 바삭하게", category: "분식/야식" },
  { name: "붕어빵", emoji: "🐟", desc: "팥 가득 겨울 대표 간식", category: "분식/야식" },
  { name: "볶음면", emoji: "🍜", desc: "간장 또는 매운맛 쫄깃 볶음면", category: "분식/야식" },
  { name: "피자빵", emoji: "🍕", desc: "치즈 듬뿍 올린 든든한 빵", category: "분식/야식" },
  { name: "닭발", emoji: "🔥", desc: "매콤 쫄깃 불닭발 한 접시", category: "분식/야식" },
  { name: "토스트", emoji: "🥪", desc: "길거리표 달걀 햄치즈 토스트", category: "분식/야식" },
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
      '<div class="card-info">' +
        '<div class="card-name">' + item.name + '</div>' +
        '<div class="card-desc">' + item.desc + '</div>' +
        '<span class="card-category">' + item.category + '</span>' +
      '</div>';
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

// 다크/라이트 모드 토글
const themeToggle = document.getElementById("theme-toggle");

function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

// 표정 인식 메뉴 추천
const FACE_MODEL_URL = "https://teachablemachine.withgoogle.com/models/Snrs8KzSEx/";
const emotionMenuMap = {
  "행복한 사람": {
    emoji: "😊",
    message: "기분 좋은 날엔 맛있는 걸로!",
    menus: ["삼겹살", "치킨", "초밥", "파스타", "피자"]
  },
  "우울한 사람": {
    emoji: "😢",
    message: "위로가 필요할 땐 따뜻한 한 끼",
    menus: ["김치찌개", "된장찌개", "칼국수", "설렁탕", "라멘"]
  },
  "피곤한 사람": {
    emoji: "😴",
    message: "에너지 충전이 필요해요!",
    menus: ["갈비탕", "삼겹살", "스테이크", "폭립", "감자탕"]
  },
  "화난 사람": {
    emoji: "😤",
    message: "스트레스는 매운맛으로 날려버려!",
    menus: ["떡볶이", "닭발", "제육볶음", "짬뽕", "낙지볶음"]
  },
  "무표정한 사람": {
    emoji: "😐",
    message: "새로운 맛에 도전해보세요!",
    menus: ["오코노미야키", "감바스", "타코", "양장피", "뇨끼"]
  }
};

let faceModel, webcam, webcamLoopId;

async function loadModelIfNeeded() {
  if (faceModel) return;
  var modelURL = FACE_MODEL_URL + "model.json";
  var metadataURL = FACE_MODEL_URL + "metadata.json";
  faceModel = await tmImage.load(modelURL, metadataURL);
}

function stopWebcam() {
  if (webcamLoopId) {
    window.cancelAnimationFrame(webcamLoopId);
    webcamLoopId = null;
  }
  if (webcam) {
    webcam.stop();
    webcam = null;
  }
  document.getElementById("webcam-container").innerHTML = "";
}

function showPhase(phase) {
  document.getElementById("face-before-start").style.display = phase === "start" ? "block" : "none";
  document.getElementById("face-webcam-phase").style.display = phase === "webcam" ? "block" : "none";
  document.getElementById("face-result-phase").style.display = phase === "result" ? "block" : "none";
}

// 결과 표시 공통 함수
function showResult(prediction) {
  var topClass = "";
  var topProb = 0;
  for (var i = 0; i < prediction.length; i++) {
    if (prediction[i].probability > topProb) {
      topProb = prediction[i].probability;
      topClass = prediction[i].className;
    }
  }

  var barsEl = document.getElementById("face-bars");
  barsEl.innerHTML = "";
  for (var i = 0; i < prediction.length; i++) {
    var row = document.createElement("div");
    row.className = "face-bar-row";
    row.innerHTML =
      '<span class="bar-label">' + prediction[i].className + '</span>' +
      '<div class="bar-track"><div class="bar-fill" style="width:' +
      (prediction[i].probability * 100).toFixed(0) + '%"></div></div>' +
      '<span>' + (prediction[i].probability * 100).toFixed(0) + '%</span>';
    barsEl.appendChild(row);
  }

  var emotionInfo = emotionMenuMap[topClass];
  var emotionEl = document.getElementById("detected-emotion");
  if (emotionInfo) {
    emotionEl.innerHTML = emotionInfo.emoji + " <strong>" + topClass + "</strong>";
    var menuName = emotionInfo.menus[Math.floor(Math.random() * emotionInfo.menus.length)];
    var menuItem = menuData.find(function(m) { return m.name === menuName; });
    document.getElementById("face-rec-menu").textContent = (menuItem ? menuItem.emoji + " " : "") + menuName;
    document.getElementById("face-rec-desc").textContent = emotionInfo.message;
  } else {
    emotionEl.innerHTML = "🤔 <strong>표정을 인식하지 못했어요</strong>";
    var randomMenu = menuData[Math.floor(Math.random() * menuData.length)];
    document.getElementById("face-rec-menu").textContent = randomMenu.emoji + " " + randomMenu.name;
    document.getElementById("face-rec-desc").textContent = "대신 랜덤으로 하나 골라봤어요!";
  }

  showPhase("result");
}

// 카메라 시작
async function startCamera() {
  var startBtn = document.getElementById("face-start-btn");
  startBtn.disabled = true;
  startBtn.textContent = "로딩 중...";

  try {
    await loadModelIfNeeded();

    webcam = new tmImage.Webcam(200, 200, true);
    await webcam.setup();
    await webcam.play();

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    showPhase("webcam");

    var captureBtn = document.getElementById("face-capture-btn");
    captureBtn.disabled = false;
    captureBtn.textContent = "📸 촬영하기";

    function updateLoop() {
      webcam.update();
      webcamLoopId = window.requestAnimationFrame(updateLoop);
    }
    webcamLoopId = window.requestAnimationFrame(updateLoop);
  } catch (e) {
    alert("카메라를 사용할 수 없습니다.");
  }
  startBtn.disabled = false;
  startBtn.textContent = "📷 카메라 시작하기";
}

// 촬영 & 분석
async function captureAndAnalyze() {
  var captureBtn = document.getElementById("face-capture-btn");
  captureBtn.disabled = true;
  captureBtn.textContent = "분석 중...";

  webcam.update();

  var snapshot = document.getElementById("face-snapshot");
  var ctx = snapshot.getContext("2d");
  ctx.drawImage(webcam.canvas, 0, 0, 200, 200);

  var prediction = await faceModel.predict(webcam.canvas);

  stopWebcam();
  showResult(prediction);
}

// 취소하기 (웹캠 → 초기 화면)
function cancelCamera() {
  stopWebcam();
  showPhase("start");
}

// 다시 촬영하기 (결과 → 웹캠)
async function retryCapture() {
  showPhase("start");
  await startCamera();
}

// 처음으로 (결과 → 초기 화면)
function backToStart() {
  showPhase("start");
}

// 이미지 업로드 분석
async function handleImageUpload(e) {
  var file = e.target.files[0];
  if (!file) return;

  var startBtn = document.getElementById("face-start-btn");
  startBtn.disabled = true;
  startBtn.textContent = "분석 중...";

  try {
    await loadModelIfNeeded();

    var img = new Image();
    img.onload = async function() {
      var snapshot = document.getElementById("face-snapshot");
      var ctx = snapshot.getContext("2d");
      // 이미지를 정사각형 중앙 크롭하여 그리기
      var size = Math.min(img.width, img.height);
      var sx = (img.width - size) / 2;
      var sy = (img.height - size) / 2;
      ctx.drawImage(img, sx, sy, size, size, 0, 0, 200, 200);

      var prediction = await faceModel.predict(snapshot);
      showResult(prediction);

      startBtn.disabled = false;
      startBtn.textContent = "📷 카메라 시작하기";
    };
    img.src = URL.createObjectURL(file);
  } catch (err) {
    alert("이미지를 분석할 수 없습니다.");
    startBtn.disabled = false;
    startBtn.textContent = "📷 카메라 시작하기";
  }
  // 같은 파일 재선택 가능하도록 초기화
  e.target.value = "";
}

document.getElementById("face-start-btn").addEventListener("click", startCamera);
document.getElementById("face-capture-btn").addEventListener("click", captureAndAnalyze);
document.getElementById("face-cancel-btn").addEventListener("click", cancelCamera);
document.getElementById("face-retry-btn").addEventListener("click", retryCapture);
document.getElementById("face-back-btn").addEventListener("click", backToStart);
document.getElementById("face-upload-input").addEventListener("change", handleImageUpload);

// 이벤트 바인딩
recommendBtn.addEventListener("click", runSlotMachine);

// 초기 렌더링
applyTheme(getPreferredTheme());
renderCategoryButtons();
renderMenuGrid();
