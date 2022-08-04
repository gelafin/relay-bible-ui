/**
 * Returns a short string describing the selected verses.
 * For example, "Genesis 1:1" for 1 selected verse, or "Genesis 1:1 etc" for a range,
 * where the verse number shown is always the first element of verseNumbers.
 * @param verses [{bookName: str, chapterNumber: int, verseNumber: int}]
 */
export const versesToString = (verses) => {
  
  // initialize default return value
  let contextHeaderText = '';
  if (!verses || verses?.length < 1) return contextHeaderText;

  const firstBook = verses[0]?.bookName;
  const firstChapter = verses[0]?.chapterNumber;
  const firstVerse = verses[0]?.verseNumber;

  if (firstBook && firstChapter && firstVerse) {
    contextHeaderText = `${firstBook} ${firstChapter}:${firstVerse}`;
  }

  // append 'etc' for ranges
  contextHeaderText += verses?.length > 1 ? ' etc'
    : '';
  
  return contextHeaderText;
};
