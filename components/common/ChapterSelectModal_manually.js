import { React, useState } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native';

// custom
import { CHAPTER_COUNTS } from '../../constants/chapterCounts';

const containerStyle = {backgroundColor: 'white', padding: 20, width: '80vw', marginLeft: 'auto', marginRight: 'auto', height: '100%'};

const ChapterSelectModal_manually = ({visible, setVisible, onChapterSelect}) => {
  const [selectedBook, setSelectedBook] = useState();
  const [selectedChapter, setSelectedChapter] = useState();

  const hideModal = () => setVisible(false);

  const handleSelection = () => {
    onChapterSelect();
    hideModal();
  };

  // process data into array of objects, expected by FlatList
  const bookNames = Object.keys(CHAPTER_COUNTS);

  console.log(bookNames);

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text onPress={handleSelection}>Click this to test. The below do not work yet</Text>
          <Text>Wat u want, Genesis 1 or Genesis 1? Or we can do Geonosis pew pew</Text>
          {/* list of books */}
          <ScrollView style={{height: '100%'}}>
            {
              bookNames.map((bookName) => (
                // TODO: View should be TouchableOpacity
                <View key={bookName} onPress={() => {setSelectedBook(bookName)}}>
                  <Text>{bookName}</Text>
                </View>
              ))
            }
          </ScrollView>
        </Modal>
      </Portal>
    </>
  );
};

export { ChapterSelectModal_manually };