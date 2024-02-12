const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
const CardsBtn = document.querySelectorAll(".Card");
const Img = document.getElementById("Img");
const TopicEl = document.getElementById("Topic");
const descr = document.getElementById("descr");
const windowEl = document.getElementById("Window");
const mapEl = document.getElementById("Map").cloneNode(true);
const section1 = document.getElementById("section1");
const windowCards = document.querySelectorAll(".windowCard");
const pdf = document.querySelector(".pdf");
let area = `Error`;
mapEl.classList.remove("hidden");
mapEl.classList.add("cloneMap");
mapEl.id = `${mapEl.id}-Clone`;
let showCards = false;
const closeWindow = (Event) => {
  windowEl.classList.add("hide");
  shadow.classList.add("hide");
  if (showCards) {
    for (let i = 0; i < windowCards.length; i++) {
      windowCards[i].classList.add("hide");
    }
  }
  document.querySelector(".Xxxx").classList.add("hide");
};
function cl() {
  document.querySelector(".Xxxx").classList.add("hide");
}
const openWindow = (showCards) => {
  windowEl.classList.remove("hide");
  shadow.classList.remove("hide");

  if (showCards) {
    for (let i = 0; i < windowCards.length; i++) {
      windowCards[i].classList.remove("hide");
    }
  }
};
const shadow = document.querySelector(".shadow");
const showImg = (img) => {
  if (img) {
    Img.src = img;
    Img.classList.remove("hide");
  }
};
const updateContent = (Topic, Description) => {
  TopicEl.textContent = Topic;
  descr.textContent = Description;
};
window.onload = () => {
  document.getElementById("loadingScreen").style.display = "none";
};
const regionIds = [
  {
    cityId: "SA01",
    cityName: "Ar Riyad",
    region: "المنطقة الوسطى",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/7/79/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D9%88%D8%B3%D8%B7%D9%89_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA02",
    cityName: "Makkah",
    region: "المنطقة الغربية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/archive/8/8a/20231126100300%21%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA03",
    cityName: "Al Madinah",
    region: "المنطقة الغربية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/archive/8/8a/20231126100300%21%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA04",
    cityName: "Ash Sharqiyah",
    region: "المنطقة الشرقية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/a/a6/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA05",
    cityName: "Al Quassim",
    region: "المنطقة الوسطى",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/7/79/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D9%88%D8%B3%D8%B7%D9%89_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA06",
    cityName: "Ha'il",
    region: "المنطقة الوسطى",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/7/79/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D9%88%D8%B3%D8%B7%D9%89_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA07",
    cityName: "Tabuk",
    region: "المنطقة الشمالية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/archive/8/8a/20231126100300%21%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA08",
    cityName: "Al Hudud ash Shamaliyah",
    region: "المنطقة الشمالية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/8/80/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA09",
    cityName: "Jizan",
    region: "المنطقة الجنوبية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/0/09/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA10",
    cityName: "Najran",
    region: "المنطقة الجنوبية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/0/09/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA11",
    cityName: "Al Bahah",
    region: "المنطقة الجنوبية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/0/09/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA12",
    cityName: "Al Jawf",
    region: "المنطقة الشمالية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/8/80/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
  {
    cityId: "SA13",
    cityName: "Asir",
    region: "المنطقة الجنوبية",
    Closth:
      "https://upload.wikimedia.org/wikipedia/ar/0/09/%D8%B2%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%A9_%28%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%29.png",
  },
];

const contentForBtns = [
  {
    Name: "Neon",
    Topic: "نيوم مدينه المستقبل",
    Description: `نيوم هي مدينة مستقبلية تقع في شمال غرب المملكة العربية السعودية، وتمتد على ساحل البحر الأحمر لمسافة 460 كم². تأسست في 24 أكتوبر 2017 بمبادرة من الأمير محمد بن سلمان آل سعود². 

  تتميز نيوم بمناخها المعتدل وتضاريسها المتنوعة التي تضم شواطئ مشمسة وجبالاً تكسوها الثلوج شتاءً¹. وتعتبر نيوم منطقة اقتصادية خاصة تقدم معيشة استثنائية لسكانها¹. 
  
  تعمل نيوم بنسبة 100% بالطاقة المتجددة³، وتهدف إلى تحويل المملكة إلى نموذجٍ عالمي رائد في مختلف جوانب الحياة³. وتتوقع نيوم أن تكون الانتهاء من المرحلة الأولى للمشروع بحلول عام 2025².
  
  تم دعم المشروع من قبل صندوق الاستثمارات العامة السعودي بقيمة 500 مليار دولار، والمستثمرين المحليين والعالميين². وتتولى شركة نيوم التي تأسست في يناير 2019 عمليات تطوير منطقة نيوم والإشراف عليها².
  `,
  },
  {
    Name: "Cube",
    Topic: "المربع الجديد",
    Description: `مشروع المربع الجديد في الرياض هو تحول حضري ضخم يمتد على مساحة 19 كيلومتر مربع، يهدف إلى إعادة تعريف ملامح المدينة وتحسين جودة العيش والعمل والترفيه. يتضمن المشروع وحدات سكنية وفنادق ومساحات تجارية ومكتبية، بالإضافة إلى مرافق ترفيهية ومجتمعية. يشمل المشروع برج المكعب كمعلم بارز يتميز بتصميم مستوحى من الطراز المعماري النجدي، ويعد أحد أهم مشاريع استراتيجية صندوق الاستثمارات العامة لإعادة تعريف التنمية الحضرية في المملكة وتحقيق رؤية السعودية ٢٠٣٠.`,
  },
  {
    Name: "MIS",
    Topic: "ًصنع في السعوديه",
    Description: `يحفز برنامج "صنع في السعودية" الشركات المحلية على توسيع نطاق أعمالها، والاستفادة من مزايا البرنامج لتسويق منتجاتها إلى عدد أكبر من العملاء، والتواصل مع المستهلكين المهتمين بالمنتجات والشركات السعودية.
    انطلق "صنع في السعودية" في عام 2021، عبر برنامج تطوير الصناعة الوطنية والخدمات اللوجستية، وهيئة تنمية الصادرات السعودية، لتشجيع المواهب والابتكارات المحلية والمنتج الوطني، وتعزيز قدرة الشركات المحلية على توسيع نطاق وصولها، والترويج لمنتجاتها محليًّا وعالميًّا، ودعم الاقتصاد الوطني، وريادة الأعمال في المملكة.
    
    يدعم البرنامج المنتجات والخدمات السعودية لتكون الخيار المفضل للمستهلكين المحليين والدوليين، ولا يقتصر الأمر على تشجيع المواطنين على شراء المنتجات المصنوعة محليًّا، ولكنه يعزز مكانة المملكة كوجهة صناعية عالمية جاذبة  للاستثمارات، ويشارك في زيادة الصادرات غير النفطية إلى 50% من الناتج المحلي الإجمالي غير النفطي بحلول عام ٢٠٣٠.
    
    يمكّن البرنامج الشركات المتعاونة معه، من استخدام شعار "صنع في السعودية" وإبراز صورة إيجابية للمملكة في جميع أنحاء العالم.
    
    اكتشف كيف تعمل رؤية السعودية ٢٠٣٠ لتحقيق وبناء اقتصاد سعودي متنوع ومستدام.`,
  },
];

hiddenElement.forEach((el) => observer.observe(el));

for (let i = 0; i < CardsBtn.length; i++) {
  document
    .getElementById(contentForBtns[i].Name)
    .addEventListener("click", () => {
      openWindow();
      updateContent(contentForBtns[i].Topic, contentForBtns[i].Description);
    });
}
for (let i = 0; i < regionIds.length; i++) {
  const city = document.getElementById(regionIds[i].cityId);

  document
    .getElementById(regionIds[i].cityId)
    .addEventListener("mouseenter", () => {
      city.setAttribute("fill", "darkgreen");
      showImg(regionIds[i].Closth);
    });
  document
    .getElementById(regionIds[i].cityId)
    .addEventListener("mouseleave", () => {
      city.setAttribute("fill", "rgb(111, 156, 118);");
      Img.classList.add("hide");
    });
}
section1.append(mapEl);
for (let i = 0; i < regionIds.length; i++) {
  const city = document.getElementById(regionIds[i].cityId);

  document
    .getElementById(regionIds[i].cityId)
    .addEventListener("mouseenter", () => {
      city.setAttribute("fill", "#E6DAC6");
    });
  document
    .getElementById(regionIds[i].cityId)
    .addEventListener("mouseleave", () => {
      city.setAttribute("fill", "rgb(0, 0, 0);");
    });
  document
    .getElementById(regionIds[i].cityId)
    .addEventListener("click", (Event) => {
      showCards = true;
      area = regionIds[i].region;
      updateContent(
        regionIds[i].region,
        ` دليل الزي و الاكل ${regionIds[i].region}`
      );
      openWindow(showCards);
    });
}
for (let i = 0; i < windowCards.length; i++) {
  windowCards[i].addEventListener("click", (Event) => {
    document.querySelector(".Xxxx").classList.remove("hide");
    document.querySelector(".Xxxx").classList.add("showw");
    if ((Event.target.parentNode.id = "clothes")) {
      pdf.src = `دليل الازياء ${area}.pdf#toolbar=0`;
    }
    if ((Event.target.parentNode.id = "foods")) {
      pdf.src = `دليل الاكل ${area}.pdf#toolbar=0`;
    }
  });
}
// well now really the end i hope i be someone who will create huge thing in programming industry :D it is really weird to read these comments Haha
