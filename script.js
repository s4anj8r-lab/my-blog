
const articles = [
  {
    id: 1,
    title: "عن الأشياء التي لا نقولها",
    category: "تأملات",
    date: "2026-10-20",
    excerpt: "بعض الأفكار تبقى معنا طويلًا، لا لأننا لا نعرف كيف نقولها، بل لأن الكلمات لا تكفي دائمًا.",
    body: [
      "هناك أشياء كثيرة نحتفظ بها لأنفسنا. أفكار تمر في أذهاننا، ومواقف تعود إلينا حين يهدأ كل شيء من حولنا.",
      "ليس الصمت دائمًا غيابًا للكلام؛ أحيانًا يكون محاولة لفهم ما نشعر به قبل أن نحاول شرحه للآخرين.",
      "وربما لا نحتاج إلى أن نجد الكلمات المناسبة لكل شيء. يكفي أحيانًا أن نعترف لأنفسنا بأن هناك شيئًا يستحق التفكير."
    ]
  },
  {
    id: 2,
    title: "لماذا نحب الكتب القديمة؟",
    category: "قراءات",
    date: "2026-10-16",
    excerpt: "في الكتب القديمة شيء يتجاوز الورق والحبر؛ إحساس بأن حوارًا طويلًا ينتظرنا خلف الصفحات.",
    body: [
      "حين نفتح كتابًا قديمًا، فإننا لا نقرأ كلمات فحسب، بل نقترب من طريقة تفكير إنسان عاش في زمن مختلف.",
      "تتغير المدن والعادات والأسئلة، لكن الإنسان يظل يعود إلى موضوعات متشابهة: المعنى، والوقت، والمعرفة، والعلاقة بالعالم.",
      "لهذا تبدو بعض الكتب وكأنها تتجاوز عصرها؛ لأنها لا تقدم معلومات فقط، بل تدعونا إلى التفكير."
    ]
  },
  {
    id: 3,
    title: "عن الوقت الذي يمضي",
    category: "تأملات",
    date: "2026-10-12",
    excerpt: "نقيس الوقت بالساعات، لكننا نتذكره بالأحداث الصغيرة التي منحت أيامنا معناها.",
    body: [
      "قد يمر يوم كامل دون أن نتذكر منه إلا لحظة قصيرة. محادثة عابرة، أو فكرة جديدة، أو طريق سلكناه للمرة الأولى.",
      "الوقت في التقويم متشابه، لكن تجربتنا له ليست كذلك. هناك أيام تبدو طويلة، وأخرى تنتهي قبل أن ننتبه إليها.",
      "ربما لهذا يجدر بنا أن نمنح انتباهنا للأشياء التي نعيشها، بدل أن ننشغل دائمًا باللحظة التالية."
    ]
  },
  {
    id: 4,
    title: "كيف تبدأ فكرة صغيرة؟",
    category: "أفكار",
    date: "2026-10-08",
    excerpt: "ليست كل البدايات واضحة. بعض المشاريع تبدأ بسؤال بسيط، ثم تكبر مع التجربة.",
    body: [
      "قد تبدأ الفكرة بملاحظة صغيرة لا تبدو مهمة في البداية. شيء تراه، أو مشكلة تتكرر، أو سؤال لم تجد له جوابًا مقنعًا.",
      "بدل انتظار الخطة المثالية، يمكننا أن نكتب ما نعرفه، ونحدد ما ينقصنا، ثم نجرّب خطوة واحدة قابلة للتنفيذ.",
      "الفكرة لا تصبح مشروعًا لمجرد أننا نفكر فيها. إنها تحتاج إلى وقت وتجربة ومراجعة، وهذه كلها أجزاء طبيعية من البداية."
    ]
  },
  {
    id: 5,
    title: "التعلّم خارج الكتب",
    category: "معرفة",
    date: "2026-10-04",
    excerpt: "المعرفة لا تأتي من مصدر واحد؛ أحيانًا نتعلم من تجربة، أو نقاش، أو خطأ نعيد النظر فيه.",
    body: [
      "للكتب دور مهم في توسيع معرفتنا، لكنها ليست الطريق الوحيد للتعلم.",
      "حين نحاول صنع شيء بأيدينا، أو نشرح فكرة لشخص آخر، أو نراجع خطأ وقعنا فيه، فإننا نكتشف جوانب لم ننتبه إليها من قبل.",
      "التعلم الحقيقي ليس جمع المعلومات فقط، بل القدرة على فهمها وربطها واستخدامها عند الحاجة."
    ]
  },
  {
    id: 6,
    title: "قيمة أن تتأنّى",
    category: "أفكار",
    date: "2026-10-01",
    excerpt: "ليس كل ما يحتاج إلى وقت متأخرًا، وليس كل ما يحدث بسرعة أفضل مما يستحق الصبر.",
    body: [
      "نعيش وسط أشياء كثيرة تطلب انتباهنا فورًا، فنعتاد أن نريد النتائج بالسرعة نفسها.",
      "لكن بعض المهارات تحتاج إلى تكرار، وبعض القرارات تحتاج إلى فهم، وبعض الأفكار لا تتضح إلا بعد أن نبتعد عنها قليلًا.",
      "التأني لا يعني التوقف عن التقدم، بل أن نعطي كل خطوة الوقت الذي تحتاج إليه."
    ]
  }
];

const grid = document.getElementById("articlesGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("categoryFilters");
const emptyMessage = document.getElementById("emptyMessage");

const dialog = document.getElementById("articleDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogCategory = document.getElementById("dialogCategory");
const dialogMeta = document.getElementById("dialogMeta");
const dialogBody = document.getElementById("dialogBody");

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

let activeCategory = "الكل";

// عرض التاريخ بصيغة عربية
function formatDate(dateString) {
  return new Intl.DateTimeFormat("ar", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateString + "T12:00:00"));
}

// إنشاء التصنيفات تلقائيًا
function renderFilters() {
  const categories = [
    "الكل",
    ...new Set(articles.map(article => article.category))
  ];

  filters.replaceChildren();

  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = category;
    button.classList.toggle(
      "active",
      category === activeCategory
    );

    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderArticles();
    });

    filters.appendChild(button);
  });
}

// إنشاء بطاقة المقال
function createArticleCard(article, index) {
  const card = document.createElement("article");
  card.className = "article-card";
  card.style.animationDelay = `${index * 60}ms`;

  const top = document.createElement("div");
  top.className = "card-top";

  const category = document.createElement("span");
  category.className = "category-label";
  category.textContent = article.category;

  const date = document.createElement("span");
  date.className = "article-meta";
  date.textContent = formatDate(article.date);

  top.append(category, date);

  const title = document.createElement("h3");
  title.textContent = article.title;

  const excerpt = document.createElement("p");
  excerpt.textContent = article.excerpt;

  const readButton = document.createElement("button");
  readButton.className = "read-more";
  readButton.type = "button";
  readButton.innerHTML = 'اقرأ المقال <span>←</span>';

  readButton.addEventListener("click", () => {
    openArticle(article);
  });

  card.append(top, title, excerpt, readButton);

  return card;
}

// عرض المقالات حسب البحث والتصنيف
function renderArticles() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredArticles = articles.filter(article => {
    const matchesCategory =
      activeCategory === "الكل" ||
      article.category === activeCategory;

    const searchableText = [
      article.title,
      article.category,
      article.excerpt,
      ...article.body
    ].join(" ").toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  grid.replaceChildren();

  filteredArticles.forEach((article, index) => {
    grid.appendChild(createArticleCard(article, index));
  });

  emptyMessage.hidden = filteredArticles.length !== 0;
}

// فتح المقال كاملًا
function openArticle(article) {
  dialogCategory.textContent = article.category;
  dialogTitle.textContent = article.title;
  dialogMeta.textContent = formatDate(article.date);

  dialogBody.replaceChildren();

  article.body.forEach(paragraphText => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    dialogBody.appendChild(paragraph);
  });

  if (!dialog.open) {
    dialog.showModal();
  }
}

// إغلاق نافذة المقال
document.getElementById("closeDialog")
  .addEventListener("click", () => {
    dialog.close();
  });

// إغلاق النافذة عند الضغط خارجها
dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// البحث الفوري
searchInput.addEventListener("input", renderArticles);

// الوضع الليلي والنهاري
function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeIcon.textContent = isDark ? "☀" : "☾";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"
  );
}

let isDark = false;

try {
  isDark = localStorage.getItem("athar-theme") === "dark";
} catch (error) {
  isDark = false;
}

applyTheme(isDark);

themeToggle.addEventListener("click", () => {
  isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);

  try {
    localStorage.setItem(
      "athar-theme",
      isDark ? "dark" : "light"
    );
  } catch (error) {
    // يظل تغيير المظهر متاحًا حتى دون التخزين.
  }
});

// السنة الحالية في التذييل
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// تشغيل المدونة
renderFilters();
renderArticles();
