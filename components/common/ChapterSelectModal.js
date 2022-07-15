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
  const [selectedBook, setSelectedBook] = useState(initialBookName);
  const [selectedChapter, setSelectedChapter] = useState(initialChapterNumber);
  const [chapterCount, setChapterCount] = useState(0);
  const [chapterSelectionDisplay, setChapterSelectionDisplay] = useState();

  const resetSelection = () => {
    setSelectedBook(initialBookName);
    setSelectedChapter(initialChapterNumber);
  };

  const hideModal = () => {
    // if user did not select a chapter and wants to close modal, reset
    selectedChapter || resetSelection();

    setVisible(false)
  };

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

  useEffect(() => {
    // update chapter options based on selected book
    setChapterCount(BOOK_METADATA[selectedBook]?.chapterCount);
  
    // Deselect chapter when book is not initial selection.
    // When it is the initial book, show the initial chapter
    // but don't actually select it, because the modal would submit
    if (selectedBook === initialBookName) {
      setChapterSelectionDisplay(initialChapterNumber);
    } else {
      setSelectedChapter(null);
      setChapterSelectionDisplay(null);
    }
  }, [selectedBook]);

  // submit if chapter is selected by user
  useEffect(() => {
    selectedChapter !== initialChapterNumber && setChapterSelectionDisplay(selectedChapter);
    selectedChapter && submit();
  }, [selectedChapter]);

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
      isSelected={item.chapterNumber === chapterSelectionDisplay}
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