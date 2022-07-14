import { React, useState } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { FlatList, SafeAreaView, View, Text } from 'react-native';

// custom
import { CHAPTER_COUNTS } from '../../constants/chapterCounts';

const containerStyle = {backgroundColor: 'white', padding: 20};

const ChapterSelectModal = ({visible, setVisible, onChapterSelect}) => {
  const [selectedBook, setSelectedBook] = useState();
  const [selectedChapter, setSelectedChapter] = useState();

  const hideModal = () => setVisible(false);

  const handleSelection = () => {
    onChapterSelect();
    hideModal();
  };

  // process data into array of objects, expected by FlatList
  const booksData = Object.keys(CHAPTER_COUNTS).map((key) => (
    {bookName: key, chapterCount: CHAPTER_COUNTS[key], }
  ));

  const bookNameComponent = ({bookName}) => (<View><Text>{bookName}</Text></View>);

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text onPress={handleSelection}>Click this to test. The below do not work yet</Text>
          <Text>Wat u want, Genesis 1 or Genesis 1? Or we can do Geonosis pew pew</Text>
          {/* list of books */}
          <FlatList style={{flex: 1}} data={booksData} renderItem={bookNameComponent} keyExtractor={item => item.bookName} />
        </Modal>
      </Portal>
    </>
  );
};

export { ChapterSelectModal };