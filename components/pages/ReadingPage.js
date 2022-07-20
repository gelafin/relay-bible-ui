// remove Text newline (referenced Jul 2022): https://stackoverflow.com/a/70289492/14257952

import { React, useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { Provider } from 'react-native-paper';

// custom
import { PageStyler } from './PageStyler.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { layoutStyles } from '../../assets/stylesheets/layouts.js';
import { ChapterSelectButton } from '../buttons/ChapterSelectButton.js';
import { ChapterSelectModal } from '../common/ChapterSelectModal.js';
import { Verse } from '../unique/Verse.js';
import { Drawer } from '../common/Drawer.js';
import { DrawerOptionsFragment } from '../unique/DrawerOptionsFragment.js';

// example for API route GET /verses/:bookName/:chapterNumber
// regular 0-indexed array of one string per verse (no spaces is slightly preferred, but whatever is easier with sample data)
const mockChapterText = {
  'Genesis': [
    [
      'In the beginning, God created the heavens and the earth.',
      'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      'And God said, “Let there be light,” and there was light.',
      'And God saw that the light was good. And God separated the light from the darkness.',
      'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
      'And God said, “Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.” And God made the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so.',
      'And God called the expanse Heaven. And there was evening and there was morning, the second day.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue'
    ],
    [
      'Wilkommen sa Genesis 2.',
      'In the beningging.',
      'In the benig...',
      'In the binignit--',
      'In the beginging.'
    ],
    [
      'Sample long chapter',
      'In the beginning, God created the heavens and the earth.',
      'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      'And God said, “Let there be light,” and there was light.',
      'And God saw that the light was good. And God separated the light from the darkness.',
      'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
      'And God said, “Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.” And God made the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so.',
      'And God called the expanse Heaven. And there was evening and there was morning, the second day.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue'
    ],
  ],
  'Revelation': [
    [
      'Scary scary scary.',
      'Big scary apocalypse.',
      'Then happy forever after!'
    ],
    [
      'Abueno adios, Master.',
      'Revelation chapter 2 is the scolding.',
      'Nothing to see here...'
    ]
  ]
};

const ReadingPage = () => {
  const [currentBookName, setCurrentBookName] = useState('Genesis');
  const [currentChapterNumber, setCurrentChapterNumber] = useState(1);
  const [currentVerseList, setCurrentVerseList] = useState([]);
  const [selectedVerses, setSelectedVerses] = useState(new Set());  // constant-time checks for Verse.isSelected
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBookAndChapterString, setCurrentBookAndChapterString] = useState('');
  const [drawerIsMinimized, setDrawerIsMinimized] = useState(true);
  
  const handleChapterSelect = ({book, chapter}) => {
    setCurrentBookName(book);
    setCurrentChapterNumber(chapter);
    clearSelectedVerses();
  };
  
  const openModal = () => setModalIsOpen(true);
  const closeDrawer = () => {clearSelectedVerses(); setDrawerIsMinimized(true)};
  const toggleExpandMinimizeDrawer = () => setDrawerIsMinimized(!drawerIsMinimized);
  
  // set current verse list based on current book & chapter selection
  useEffect(() => {
    try {
      const verseList = currentBookName && currentChapterNumber ?
        mockChapterText[currentBookName][currentChapterNumber - 1]
        : null;
        
      if (verseList) {
        setCurrentVerseList(verseList);
    
        setCurrentBookAndChapterString(`${currentBookName} ${currentChapterNumber}`);
      }
    } catch (error) {
      console.error(`Selection ${currentBookName} ${currentChapterNumber} is not part of the current data set`);
    }
  }, [currentBookName, currentChapterNumber]);

  const verseIsSelected = (verseNumber) => selectedVerses.has(verseNumber);

  const handleVersePress = (verse) => {
    verseIsSelected(verse.number) ? handleVerseDeselect(verse.number)
      : handleVerseSelect(verse.number);
  };

  const handleVerseSelect = (verseNumber) => {
    // add to set of selected verse numbers
    const tempCopy = new Set(selectedVerses);
    tempCopy.add(verseNumber);
    setSelectedVerses(tempCopy);
  };

  const handleVerseDeselect = (verseNumber) => {
    // remove from set of selected verse numbers
    const tempCopy = new Set(selectedVerses);
    tempCopy.delete(verseNumber);
    setSelectedVerses(tempCopy);
  };

  const clearSelectedVerses = () => {
    setSelectedVerses(new Set());
  };

  const handleRelatedNotesPress = () => {
    console.log('opening Related Notes drawer');
  };

  const handleRelatedCommentaryPress = () => {
    console.log('opening Related Commentary drawer');
  };

  return (
    <>
      <Provider>
        <ContextHeader
          customHeadingComponent={
            <ChapterSelectButton label={currentBookAndChapterString} onPress={openModal}></ChapterSelectButton>
          }
        >
        </ContextHeader>
        <ChapterSelectModal
          visible={modalIsOpen}
          setVisible={setModalIsOpen}
          onChapterSelect={handleChapterSelect}
          initialBookName={currentBookName}
          initialChapterNumber={currentChapterNumber}
        ></ChapterSelectModal>
        <PageStyler customPageStyle={layoutStyles.readingPage}>
          <ScrollView scrollEnabled='true'>
            <Text>
              {currentVerseList?.map((verseText, index) =>
                <Verse
                  key={'v' + index}
                  verseNumber={index + 1}
                  verseText={verseText}
                  isSelected={verseIsSelected(index + 1)}
                  onVersePress={handleVersePress}
                ></Verse>
              )}
            </Text>
          </ScrollView>
        </PageStyler>
        <Drawer
          isOpen={selectedVerses.size > 0}
          minimize={drawerIsMinimized}  // TODO: remove this and set height based on child height?
        >
          <DrawerOptionsFragment
            currentBook={currentBookName}
            currentChapter={currentChapterNumber}
            selectedVerses={Array.from(selectedVerses).sort()}
            onClosePress={closeDrawer}
            onExpandPress={toggleExpandMinimizeDrawer}
            onRelatedCommentaryPress={handleRelatedCommentaryPress}
            onRelatedNotesPress={handleRelatedNotesPress}
          ></DrawerOptionsFragment>
        </Drawer>
      </Provider>
    </>
  );
};

export { ReadingPage };
