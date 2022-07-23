/*
 * Returns a short string describing the selected verses.
 * For example, "Genesis 1:1" for 1 selected verse, or "Genesis 1:1 etc" for a range,
 * where the verse number shown is always the first element of verseNumbers.
 */
export const versesToString = (book, chapter, verseNumbers) => {
  // initialize default return value
  let contextHeaderText = '';

  contextHeaderText = book && chapter && verseNumbers?.length > 0 &&
    `${book} ${chapter}:${verseNumbers.slice(0, 1)}`;

  // append 'etc' for ranges
  contextHeaderText += verseNumbers?.length > 1 ? ' etc'
    : '';
  
  return contextHeaderText;
};
