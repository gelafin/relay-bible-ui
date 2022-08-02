export function Verse(bookName, chapterNumber, verseNumber) {
  this.bookName = bookName;
  this.chapterNumber = chapterNumber;
  this.verseNumber = verseNumber;

  this.reference = `${bookName} ${chapterNumber}:${verseNumber}`;

  return this;
}