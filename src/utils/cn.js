export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 📌 Metin işlemleri

/**
 * Verilen metni tamamen büyük harfe çevirir.
 * @param {string} text
 * @returns {string}
 */
export function toUpper(text) {
  return String(text).toUpperCase();
}

/**
 * Verilen metni tamamen küçük harfe çevirir.
 * @param {string} text
 * @returns {string}
 */
export function toLower(text) {
  return String(text).toLowerCase();
}

/**
 * İlk harfi büyük, diğer harfleri küçük yapar.
 * @param {string} text
 * @returns {string}
 */
export function capitalize(text) {
  return (
    String(text).charAt(0).toUpperCase() + String(text).slice(1).toLowerCase()
  );
}

/**
 * Tüm kelimelerin baş harfini büyütür.
 * @param {string} text
 * @returns {string}
 */
export function titleCase(text) {
  return String(text)
    .toLowerCase()
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Metni ters çevirir.
 * @param {string} text
 * @returns {string}
 */
export function reverseText(text) {
  return String(text).split("").reverse().join("");
}

/**
 * Verilen metni URL için uygun hale getirir. (slug)
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Metni belirtilen uzunlukta keser, sonuna "..." gibi ek getirir.
 * @param {string} text
 * @param {number} length
 * @param {string} suffix
 * @returns {string}
 */
export function truncate(text, length = 100, suffix = "...") {
  return text.length > length ? text.substring(0, length) + suffix : text;
}

// 📌 Sayı ve Para formatlama

/**
 * Para birimini formatlar. Varsayılan olarak Türk Lirası (TRY).
 * @param {number} amount
 * @param {string} locale
 * @param {string} currency
 * @returns {string}
 */
export function formatCurrency(amount, locale = "tr-TR", currency = "TRY") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Binlik ayırıcılarla sayı formatlar. Örn: 1.000.000
 * @param {number} value
 * @param {string} locale
 * @returns {string}
 */
export function formatNumber(value, locale = "tr-TR") {
  return new Intl.NumberFormat(locale).format(value);
}

// 📌 Diğer Yardımcı Fonksiyonlar

/**
 * Boolean değerini "Evet" / "Hayır" olarak çevirir.
 * @param {boolean} value
 * @returns {string}
 */
export function booleanToText(value) {
  return value ? "Evet" : "Hayır";
}

/**
 * Tarihi belirtilen formatta döndürür. (örneğin: 03 Temmuz 2025)
 * @param {Date|string} date
 * @param {string} locale
 * @returns {string}
 */
export function formatDate(date, locale = "tr-TR") {
  return new Date(date).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * Verilen metnin başına emoji ekler.
 * @param {string} emoji
 * @param {string} text
 * @returns {string}
 */
export function addEmoji(emoji, text) {
  return `${emoji} ${text}`;
}

/**
 * Rakamı yazıya döker. (1 => "Bir", 2 => "İki")
 * Basit örnek, genişletilebilir.
 * @param {number} num
 * @returns {string}
 */
export function numberToText(num) {
  const map = [
    "Sıfır",
    "Bir",
    "İki",
    "Üç",
    "Dört",
    "Beş",
    "Altı",
    "Yedi",
    "Sekiz",
    "Dokuz",
  ];
  return map[num] || num.toString();
}
