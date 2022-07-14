/*
 * Array of N items code copied from https://stackoverflow.com/a/38213213/14257952 Jul 2022
 */

import { React, useEffect, useState } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

// custom
import { CHAPTER_COUNTS } from '../../constants/chapterCounts';
import { layoutStyles } from '../../assets/stylesheets/layouts';

const containerStyle = {backgroundColor: 'white', padding: 20, width: '80vw', marginLeft: 'auto', marginRight: 'auto', height: '100%'};

const ChapterSelectModal = ({visible, setVisible, onChapterSelect}) => {
  const [selectedBook, setSelectedBook] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterCount, setChapterCount] = useState(0);

  const resetSelection = () => {
    setSelectedBook(null);
    setSelectedChapter(null);
  };

  const hideModal = () => {
    resetSelection();

    setVisible(false)
  };

  // update chapter options based on selected book
  useEffect(() => {
    setChapterCount(CHAPTER_COUNTS[selectedBook]);

    setSelectedChapter(null);
  }, [selectedBook]);

  // process data into array of objects, expected by FlatList
  const booksData = Object.keys(CHAPTER_COUNTS).map((key) => (
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

  // submit if both book and chapter are selected
  useEffect(() => {
    selectedBook && selectedChapter && submit();
  }, [selectedBook, selectedChapter]);

  // each item rendered by the books FlatList
  const renderBookNameItem = ({item}) => (
    <TouchableOpacity
      style={{padding: 20, cursor: 'pointer'}}
      onPress={() => setSelectedBook(item.bookName)}
    >
      <Text style={{fontSize: 32}}>{item.bookName}</Text>
    </TouchableOpacity>
  );

  // each item rendered by the chapters FlatList
  const renderChapterNumberItem = ({item}) => (
    <TouchableOpacity
      style={{padding: 20, cursor: 'pointer'}}
      onPress={() => setSelectedChapter(item.chapterNumber)}
    >
      <Text style={{fontSize: 32}}>{item.chapterNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Wat u want, Genesis 1 or Genesis 1? Or we can do Geonosis pew pew</Text>
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