export function createVerse(bookNameIn, chapterNumberIn, verseNumberIn) {
  return ({
    bookName: bookNameIn,
    chapterNumber: '' + chapterNumberIn,
    verseNumber: '' + verseNumberIn,
    reference: `${bookNameIn} ${chapterNumberIn}:${verseNumberIn}`,
    equals: function(verseObj) {
      return (
        this.bookName === verseObj.bookName &&
        this.chapterNumber === verseObj.chapterNumber &&
        this.verseNumber === verseObj.verseNumber
      );
    }
  });
}