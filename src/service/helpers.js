export const slugify = (text, separator = '-') => {
  text = text.toString().toLowerCase().trim();

  const sets = [
    ['А', 'A'],
    ['а', 'a'],
    ['Б', 'B'],
    ['б', 'b'],
    ['В', 'V'],
    ['в', 'v'],
    ['Г', 'G'],
    ['г', 'g'],
    ['Д', 'D'],
    ['д', 'd'],
    ['ъе', 'ye'],
    ['Ъе', 'Ye'],
    ['ъЕ', 'yE'],
    ['ЪЕ', 'YE'],
    ['Е', 'E'],
    ['е', 'e'],
    ['Ё', 'Yo'],
    ['ё', 'yo'],
    ['Ж', 'Zh'],
    ['ж', 'zh'],
    ['З', 'Z'],
    ['з', 'z'],
    ['И', 'I'],
    ['и', 'i'],
    ['ый', 'iy'],
    ['Ый', 'Iy'],
    ['ЫЙ', 'IY'],
    ['ыЙ', 'iY'],
    ['Й', 'Y'],
    ['й', 'y'],
    ['К', 'K'],
    ['к', 'k'],
    ['Л', 'L'],
    ['л', 'l'],
    ['М', 'M'],
    ['м', 'm'],
    ['Н', 'N'],
    ['н', 'n'],
    ['О', 'O'],
    ['о', 'o'],
    ['П', 'P'],
    ['п', 'p'],
    ['Р', 'R'],
    ['р', 'r'],
    ['С', 'S'],
    ['с', 's'],
    ['Т', 'T'],
    ['т', 't'],
    ['У', 'U'],
    ['у', 'u'],
    ['Ф', 'F'],
    ['ф', 'f'],
    ['Х', 'Kh'],
    ['х', 'kh'],
    ['Ц', 'Ts'],
    ['ц', 'ts'],
    ['Ч', 'Ch'],
    ['ч', 'ch'],
    ['Ш', 'Sh'],
    ['ш', 'sh'],
    ['Щ', 'Sch'],
    ['щ', 'sch'],
    ['Ъ', ''],
    ['ъ', ''],
    ['Ы', 'Y'],
    ['ы', 'y'],
    ['Ь', ''],
    ['ь', ''],
    ['Э', 'E'],
    ['э', 'e'],
    ['Ю', 'Yu'],
    ['ю', 'yu'],
    ['Я', 'Ya'],
    ['я', 'ya'],
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set[0], 'gi'), set[1]);
  });

  text = text.toString().toLowerCase()
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/&/g, '-and-')       // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\--+/g, '-')        // Replace multiple - with single -
    .replace(/^-+/, '')           // Trim - from start of text
    .replace(/-+$/, '');          // Trim - from end of text

  if ((typeof separator !== 'undefined') && (separator !== '-')) {
    text = text.replace(/-/g, separator);
  }

  return text;
}