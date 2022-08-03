// remove Text newline (referenced Jul 2022): https://stackoverflow.com/a/70289492/14257952

import { React, useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { Provider } from 'react-native-paper';
import axios from 'axios';

// custom styles
import { layoutStyles } from '../../assets/stylesheets/layouts.js';

// custom components
import { PageStyler } from './PageStyler.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { ChapterSelectButton } from '../buttons/ChapterSelectButton.js';
import { ChapterSelectModal } from '../common/ChapterSelectModal.js';
import { Verse } from '../unique/Verse.js';
import { Drawer } from '../common/Drawer.js';
import { DrawerOptionsFragment } from '../unique/DrawerOptionsFragment.js';
import { DrawerPage } from '../common/DrawerPage.js';
import { NotesPage } from './NotesPage.js';
import { CommentaryPage } from './CommentaryPage.js';
import { Enum } from '../../util/Enum.js';

// custom util
import { versesToString } from "../../util/VerseReferenceFormatter";
import { BASE_URL } from '../../constants/apiData.js';
import { Verse as VerseObj } from '../../util/Verse.js';

const drawerContentsOptions = new Enum('NOTES_PAGE', 'COMMENTARY_PAGE', 'VERSE_SELECTED_OPTIONS');

const ReadingPage = () => {
  const [currentBookName, setCurrentBookName] = useState('Matthew');
  const [currentChapterNumber, setCurrentChapterNumber] = useState(1);
  const [currentVerseList, setCurrentVerseList] = useState([]);
  const [selectedVerseNumbers, setSelectedVerseNumbers] = useState(new Set());  // constant-time checks for Verse.isSelected
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBookAndChapterString, setCurrentBookAndChapterString] = useState('');
  const [drawerIsMinimized, setDrawerIsMinimized] = useState(true);
  const [drawerContents, setDrawerContents] = useState();
  const [contextHeaderText, setContextHeaderText] = useState();
  const [selectedVerseNumbersOrdered, setSelectedVersesOrdered] = useState([]);

  // TODO: use min heap for selected verses to maintain order and contains() speed
  useEffect(() => {
    setSelectedVersesOrdered(Array.from(selectedVerseNumbers).sort());
  }, [selectedVerseNumbers]);

  const handleChapterSelect = ({book, chapter}) => {
    setCurrentBookName(book);
    setCurrentChapterNumber(chapter);
    clearSelectedVerses();
  };
  
  const openModal = () => setModalIsOpen(true);
  const closeDrawer = () => {
    setDrawerIsMinimized(true);

    // hide verse context drawer
    clearSelectedVerses();

    // reset drawer contents to default
    setDrawerContents(drawerContentsOptions.VERSE_SELECTED_OPTIONS);
  };
  const toggleExpandMinimizeDrawer = () => setDrawerIsMinimized(drawerIsMinimized => !drawerIsMinimized);

  const fetchVerses = async () => {
    console.log(`\tbook name: ${currentBookName} chapter: ${currentChapterNumber}`);
    try {
      // validate (invalid values will block the next valid request)
      if (!currentBookName || !currentChapterNumber) {
        return;
      }

      console.log('fetching verses with book ', currentBookName, ' and chapter ', currentChapterNumber);
      // replace spaces for url
      const reqUrl = `${BASE_URL}verses/${currentBookName.replaceAll(' ', '-')}/${currentChapterNumber}`;
      console.log('req url: ', reqUrl);

      const res = await axios.get(reqUrl);
      const verseList = res?.data ? res.data : null;

      if (verseList) {
        // console.log('success. Verses: ', JSON.stringify(verseList));
        setCurrentVerseList(verseList);
  
        setCurrentBookAndChapterString(`${currentBookName} ${currentChapterNumber}`);
      } else {
        console.log('error. res: ', JSON.stringify(res));
      }

    } catch (error) {
      console.log(`Selection ${currentBookName} ${currentChapterNumber} is not part of the current data set`);
      console.log(error);
    }
  };

  // set current verse list based on current book & chapter selection
  useEffect(() => {
    console.log(`\tbook name: ${currentBookName} chapter: ${currentChapterNumber}`);
    fetchVerses();
  },
  [currentBookName, currentChapterNumber]);

  const verseIsSelected = (verseNumber) => selectedVerseNumbers.has(verseNumber);

  const handleVersePress = (verse) => {
    verseIsSelected(verse.number) ? handleVerseDeselect(verse.number)
      : handleVerseSelect(verse.number);
  };

  const handleVerseSelect = (verseNumber) => {
    // add to set of selected verse numbers
    const tempCopy = new Set(selectedVerseNumbers);
    tempCopy.add(verseNumber);
    setSelectedVerseNumbers(tempCopy);
  };

  const handleVerseDeselect = (verseNumber) => {
    // remove from set of selected verse numbers
    const tempCopy = new Set(selectedVerseNumbers);
    tempCopy.delete(verseNumber);
    setSelectedVerseNumbers(tempCopy);
  };

  const clearSelectedVerses = () => {
    setSelectedVerseNumbers(new Set());
  };

  const handleRelatedNotesPress = () => {
    setDrawerContents(drawerContentsOptions.NOTES_PAGE);
  };

  const handleRelatedCommentaryPress = () => {
    setDrawerContents(drawerContentsOptions.COMMENTARY_PAGE);
  };

  // initialize drawer contents
  useEffect(() => {
    setDrawerContents(drawerContentsOptions.VERSE_SELECTED_OPTIONS);
  }, []);

  // update context header text
  useEffect(() => {
    const selectedVerseObjects = selectedVerseNumbersOrdered.map(
      verseNumber => new VerseObj(currentBookName, currentChapterNumber, verseNumber)
    );
    let contextHeaderText = versesToString(selectedVerseObjects);
    setContextHeaderText(contextHeaderText);
  }, [currentBookName, currentChapterNumber, selectedVerseNumbersOrdered]);

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
              {currentVerseList && currentVerseList.map((verseData, index) =>
                <Verse
                  key={'v' + index}
                  verseNumber={index + 1}
                  verseText={verseData.bible_text}
                  isSelected={verseIsSelected(index + 1)}
                  onVersePress={handleVersePress}
                ></Verse>
              )}
            </Text>
          </ScrollView>
        </PageStyler>

        {/* Verse selected context drawer with "Related" buttons */}
        <Drawer
          isOpen={selectedVerseNumbers.size > 0}
          minimize={drawerIsMinimized}
        >
          {/* JSX-style switch for drawerContents */}
          {
            drawerContents === drawerContentsOptions.VERSE_SELECTED_OPTIONS &&
            <DrawerPage
              headerText={contextHeaderText}
              onClosePress={closeDrawer}
            >
              <DrawerOptionsFragment
                onRelatedCommentaryPress={handleRelatedCommentaryPress}
                onRelatedNotesPress={handleRelatedNotesPress}
              ></DrawerOptionsFragment>
            </DrawerPage>
          }
          {
            drawerContents === drawerContentsOptions.NOTES_PAGE &&
            <DrawerPage
              headerText={contextHeaderText}
              onClosePress={closeDrawer}
              onExpandPress={toggleExpandMinimizeDrawer}
            >
              <NotesPage initialSelectedVerses={selectedVerseNumbers}></NotesPage>
            </DrawerPage>
          }
          {
            drawerContents === drawerContentsOptions.COMMENTARY_PAGE &&
            <DrawerPage
              headerText={contextHeaderText}
              onClosePress={closeDrawer}
              onExpandPress={toggleExpandMinimizeDrawer}
            >
              <CommentaryPage initialSelectedVerses={selectedVerseNumbers}></CommentaryPage>
            </DrawerPage>
          }
        </Drawer>

      </Provider>
    </>
  );
};

export { ReadingPage };
