export function createVerse(bookName, chapterNumber, verseNumber) {
  return ({
    bookName: bookName,
    chapterNumber: chapterNumber,
    verseNumber: verseNumber,
    reference: `${bookName} ${chapterNumber}:${verseNumber}`,
    // equals: (bookName2, chapterNumber2, verseNumber2) => (
    //   bookName === bookName2 &&
    //   chapterNumber === chapterNumber2 &&
    //   verseNumber === verseNumber2
    // )
  });
}