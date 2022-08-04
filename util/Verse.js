export function createVerse(bookName, chapterNumber, verseNumber) {
  return ({
    bookName: bookName,
    chapterNumber: chapterNumber,
    verseNumber: verseNumber,
    reference: `${bookName} ${chapterNumber}:${verseNumber}`
  });
}