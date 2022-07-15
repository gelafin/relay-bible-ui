/*
 * Array of N items code copied from https://stackoverflow.com/a/38213213/14257952 Jul 2022
 */

import { React, useEffect, useState } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { FlatList, View } from 'react-native';

// custom
import { BOOK_METADATA } from '../../constants/bookMetadata';
import { layoutStyles } from '../../assets/stylesheets/layouts';
import { ListOption } from '../buttons/ListOption';

const ChapterSelectModal = ({visible, setVisible, onChapterSelect, initialBookName, initialChapterNumber}) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterCount, setChapterCount] = useState(0);

  const resetSelection = () => {
    console.log('resetting modal selection');
    setSelectedBook(null);
    setSelectedChapter(null);
  };

  const hideModal = () => {
    resetSelection();

    setVisible(false)
  };

  // update chapter options based on selected book
  useEffect(() => {
    setChapterCount(BOOK_METADATA[selectedBook]?.chapterCount);

    // deselect chapter when book changes (TODO: and book is not initial selection)
    setSelectedChapter(null);
  }, [selectedBook]);

  // process data into array of objects, expected by FlatList
  const booksData = Object.keys(BOOK_METADATA).map((key) => (
    {bookName: key}
  ));

  // process chapter data into array of objects, expected by FlatList
  const chapterData = chapterCount && [...Array(chapterCount).keys()].map(index => {
    ++index;  // convert to 1-based

    return (
      {chapterNumber: index}
    );
  });

  const submit = () => {
    hideModal();
    
    onChapterSelect({book: selectedBook, chapter: selectedChapter});
  };

  // submit if both book and chapter are selected by user
  useEffect(() => {
    selectedBook && selectedChapter && submit();
  }, [selectedBook, selectedChapter]);

  const renderBookNameItem = ({item}) => (
    <ListOption
      label={item.bookName}
      onPress={() => setSelectedBook(item.bookName)}
      isSelected={item.bookName === selectedBook}
    ></ListOption>
  );

  // each item rendered by the chapters FlatList
  const renderChapterNumberItem = ({item}) => (
    <ListOption
      label={item.chapterNumber}
      onPress={() => setSelectedChapter(item.chapterNumber)}
      isSelected={item.chapterNumber === selectedChapter}
    ></ListOption>
  );

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={layoutStyles.modalContainerStyle}>
          <View style={[layoutStyles.page, layoutStyles.horizontalContainer]}>
            {/* list of books */}
            <FlatList data={booksData} renderItem={renderBookNameItem} keyExtractor={item => item.bookName} />

            {/* list of chapters */}
            <FlatList data={chapterData} renderItem={renderChapterNumberItem} keyExtractor={item => item.chapterNumber} />
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export { ChapterSelectModal };