import React from "react";
import CustomFaq from "../Common/Faq";

const FaqHomePage = () => {
  const faqItems = [
    {
      question: "Ritim nedir?",
      answer:
        "Ritim, topluluklar için etkileşim ve gelir artırıcı dijital çözümler sunan bir platformdur.",
    },
    {
      question: "Nasıl kayıt olabilirim?",
      answer:
        "Anasayfadaki 'Kayıt Ol' butonuna tıklayarak hızlıca üye olabilirsiniz.",
    },
    {
      question: "Platform kimler için uygun?",
      answer:
        "Ritim, topluluk yöneten kişiler, dernekler, kulüpler, içerik üreticileri ve abonelik tabanlı sistem kullanan tüm girişimler için uygundur.",
    },
    {
      question: "Üyelik ücretli mi?",
      answer:
        "Ritim’e kayıt olmak ücretsizdir. Gelişmiş özellikler için farklı abonelik paketleri sunulmaktadır.",
    },
    {
      question: "Verilerim güvende mi?",
      answer:
        "Evet, verileriniz KVKK ve GDPR uyumlu sistemlerle güvenli şekilde saklanır.",
    },
    {
      question: "Destek ekibine nasıl ulaşırım?",
      answer: "İletişim sayfamızdan bizimle doğrudan iletişime geçebilirsiniz.",
    },
    {
      question: "Topluluğumu nasıl büyütebilirim?",
      answer:
        "Ritim’in sunduğu analiz, duyuru ve etkileşim araçları ile topluluğunuzu sürdürülebilir şekilde büyütebilirsiniz.",
    },
  ];

  return (
    <div>
      <CustomFaq items={faqItems} />
    </div>
  );
};

export default FaqHomePage;
