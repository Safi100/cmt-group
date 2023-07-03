
const languages = document.querySelectorAll(".language")
const current_flag = document.querySelector(".current_flag")
const html = document.querySelector("html")
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
let textArray = ["Land", "Air", "Sea"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
var Lang

lang.addEventListener('click', show_hide_languages)

languages.forEach(lang =>{
  lang.addEventListener("click",()=>{
    console.log(lang.children[1].textContent);
  change_language(lang.children[1].textContent)
  show_hide_languages()
  })
})



var translation = {
    en : {
        flag : "Assets/us.png",
        home:"Home",
        services:"Services",
        about:"About Us",
        contact:"Contact Us",
        english : "Eng",
        turkish : "Tr",
        arabic : "Arabic",
        international_trade:"international trade",
        Shipping_by:"Shipping by",
        client_text:"Our official clients",
        services_text:"Our services",
        card_1:"We can customize orders according to your needs",
        card_2:"We ship different types of commercial goods of different weights and qualities",
        card_3:"We provide complete import/export services with our office in Istanbul - Turkey",
        card_4:"We can help you buy or sell abroad",
        card_5:"Our experienced team will assist you in any way possible to make your foreign trade transactions, whether import or export, smooth and hassle-free.",
        about_text:"About Us",
        about_paragraph:"Our company CMT GROUP is an industrial trading company located in Istanbul – Turkey . which provides technological solutions and new products, ideas and softwares . We have a distinguished 30 years experience in trading with the best price and quality",
        contact_text:"Contact Us",
        contact_info:"Contact Info",
        Send_a_Message:"Send a Message",
        first_name:"First Name",
        last_name:"Last Name",
        email:"Email",
        mobile:"Mobile",
        message_text:"Message",
        message_placeholder:"Write your Message here...",
        send_button:"Send",
        whatsapp_button:"Contact via whatsapp",
        rights :"All Rights Reserved."
    },

    tr : {
      flag : "Assets/tr.png",
      home : "eve",
      services:"Hizmetler",
      about:"Hakkımızda",
      contact:"Bize Ulaşın",
      english : "ingilizce",
      turkish : "Türk",
      arabic : "Arapça",
      international_trade:"Uluslararası Ticaret",
      Shipping_by:" yoluyla nakliye ",
      client_text:"Resmi müşterilerimiz",
      services_text:"Hizmetlerimiz",
      card_1:"Siparişleri ihtiyaçlarınıza göre özelleştirebiliriz",
      card_2:"Farklı ağırlık ve kalitelerde farklı türde ticari mallar gönderiyoruz",
      card_3:"İstanbul - Türkiye ofisimiz ile komple ithalat/ihracat hizmetleri sunuyoruz.",
      card_4:"Yurtdışında satın almanıza veya satmanıza yardımcı olabiliriz",
      card_5:"Deneyimli ekibimiz, ithalat veya ihracat dış ticaret işlemlerinizi sorunsuz ve sorunsuz bir şekilde gerçekleştirmeniz için her türlü konuda size yardımcı olacaktır.",
      about_text:"Hakkımızda",
      about_paragraph:"Firmamız <b>CMT GROUP</b>, İstanbul – Türkiye'de bulunan bir endüstriyel ticaret şirketidir. teknolojik çözümler ve yeni ürünler, fikirler ve yazılımlar sunan . En iyi fiyat ve kalite ile ticarette 30 yıllık seçkin bir tecrübeye sahibiz.",
      contact_text:"Bize Ulaşın",
      contact_info:"İletişim bilgileri",
      Send_a_Message:"mesaj göndermek",
      first_name:"İlk adı",
      last_name:"Soy isim",
      email:"E-posta",
      mobile:"telefon numarası",
      message_text:"İleti",
      message_placeholder:"Mesajını buraya yaz...",
      send_button:"Göndermek",
      whatsapp_button:"whatsapp üzerinden iletişim",
      rights :"Tüm hakları Saklıdır."
    },

    ar : {
        flag : "Assets/sa.png",
        home : "الصفحة الرئيسية",
        services:"خدماتنا",
        about:"من نحن",
        contact:"اتصل بنا",
        english : "اللغة الإنجليزية",
        turkish : "اللغة التركية",
        arabic : "اللغة العربية",
        international_trade:"تجارة عالمية",
        Shipping_by:"شحن " ,
        client_text:"عملائنا الرسميين",
        services_text:"خدماتنا",
        card_1:"يمكننا تخصيص الطلبات وفقًا لاحتياجاتك",
        card_2:"نقوم بشحن أنواع مختلفة من البضائع التجارية بمختلف الأوزان والصفات",
        card_3:"نقدم خدمات الاستيراد / التصدير كاملة مع مكتبنا في اسطنبول - تركيا",
        card_4:"يمكننا مساعدتك في الشراء أو البيع في الخارج",
        card_5:"سيساعدك فريقنا المتمرس بأي طريقة ممكنة في إجراء معاملات التجارة الخارجية الخاصة بك ، سواء كانت استيرادًا أو تصديرًا ، على نحو سلس وخالي من المتاعب.",
        about_text:"من نحن",
        about_paragraph:"شركتنا <b>CMT GROUP</b> هي شركة تجارية صناعية تقع في اسطنبول - تركيا. التي تقدم الحلول التكنولوجية والمنتجات والأفكار والبرامج الجديدة. لدينا 30 عاما من الخبرة في التداول بأفضل الأسعار والجودة",
        contact_text:"راسلنا",
        contact_info:"معلومات الاتصال",
        Send_a_Message:"ارسل رسالة",
        first_name:"الاسم الاول",
        last_name:"اللقب",
        email:"البريد الالكتروني",
        mobile:"رقم الهاتف",
        message_text:"الرسالة",
        message_placeholder:"اكتب رسالتك هنا...",
        send_button:"إرسال",
        whatsapp_button:"تواصل عبر الواتس اب",
        rights :"جميع الحقوق محفوظة" 
      }
}

function change_language(new_language){
    if(new_language=="ar"|| new_language=="Arabic" || new_language=="اللغة العربية" || new_language=="Arapça"){
      html.classList.add("IsArabic")
      document.querySelectorAll(".InfoBox div").forEach(div =>{
        div.classList.add("flip")
      })
      document.querySelector(".current_language_text").textContent=`${translation["ar"].arabic}`
      Lang = "ar"
      textArray = ["بري", "جوي", "بحري"]
    }else if(new_language=="en"|| new_language=="Eng" || new_language=="اللغة الإنجليزية" || new_language=="ingilizce" ){
      html.classList.remove("IsArabic")
      document.querySelectorAll(".InfoBox div").forEach(div =>{
        div.classList.remove("flip")
      })
      document.querySelector(".current_language_text").textContent=`${translation["en"].english}`
      Lang = "en"
      textArray = ["Land", "Air", "Sea"]
    }else if(new_language=="tr"|| new_language=="Tr" || new_language=="اللغة التركية"){
      html.classList.remove("IsArabic")
      document.querySelectorAll(".InfoBox div").forEach(div =>{
        div.classList.remove("flip")
      })
      document.querySelector(".current_language_text").textContent=`${translation["tr"].turkish}`
      Lang = "tr"
      textArray = ["kara", "Hava", "Deniz"]
    }
    localStorage.setItem("lang",Lang)
    document.querySelector(".current_flag").src = `${translation[Lang].flag}`
    document.querySelector(".eng_word").textContent = `${translation[Lang].english}`
    document.querySelector(".tr_word").textContent = `${translation[Lang].turkish}`
    document.querySelector(".ar_word").textContent = `${translation[Lang].arabic}`
    document.querySelector(".international_trade").textContent = `${translation[Lang].international_trade}`
    document.querySelector(".Shipping_by").textContent = `${translation[Lang].Shipping_by}`
    document.querySelector(".client_title").textContent = `${translation[Lang].client_text}`
    document.querySelector(".services_title").textContent = `${translation[Lang].services_text}`
    document.querySelector(".card_1").textContent = `${translation[Lang].card_1}`
    document.querySelector(".card_2").textContent = `${translation[Lang].card_2}`
    document.querySelector(".card_3").textContent = `${translation[Lang].card_3}`
    document.querySelector(".card_4").textContent = `${translation[Lang].card_4}`
    document.querySelector(".card_5").textContent = `${translation[Lang].card_5}`
    document.querySelector(".about_title").textContent = `${translation[Lang].about_text}`
    document.querySelector(".about_paragraph").innerHTML = `${translation[Lang].about_paragraph}`
    document.querySelector(".contact_title").textContent = `${translation[Lang].contact_text}`
    document.querySelector(".Send_a_Message").textContent = `${translation[Lang].Send_a_Message}`
    document.querySelector(".First_Name").textContent = `${translation[Lang].first_name}`
    document.querySelector(".Last_Name").textContent = `${translation[Lang].last_name}`
    document.querySelector(".Email").textContent = `${translation[Lang].email}`
    document.querySelector(".Mobile").textContent = `${translation[Lang].mobile}`
    document.querySelector(".Message").textContent = `${translation[Lang].message_text}`
    document.querySelector(".Contact_info_title").textContent = `${translation[Lang].contact_info}`
    document.querySelector(".send_button").textContent = `${translation[Lang].send_button}`
    document.querySelector(".whatsapp_button_text").textContent = `${translation[Lang].whatsapp_button}`
    document.querySelector(".copyright_text").textContent = `${translation[Lang].rights}`
    // links
    document.querySelectorAll(".home_link").forEach(home =>{
      home.textContent=`${translation[Lang].home}`
    })
    document.querySelectorAll(".services_link").forEach(services =>{
      services.textContent=`${translation[Lang].services}`
    })
    document.querySelectorAll(".about_link").forEach(about =>{
      about.textContent=`${translation[Lang].about}`
    })
    document.querySelectorAll(".contact_link").forEach(contact =>{
      contact.textContent=`${translation[Lang].contact}`
    })
}
document.addEventListener("DOMContentLoaded" , ()=>{
  const language = localStorage.getItem("lang")
  console.log(language);
  change_language(language)
} )
function show_hide_languages(){
  // Language
  if (language_container.classList.contains("show") === true){
      language_container.classList.remove("show")
      document.querySelector(".arrow").classList.remove("arrow_after_show")
  }else{
      language_container.classList.add("show")
      document.querySelector(".arrow").classList.add("arrow_after_show")
  }
}


function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
