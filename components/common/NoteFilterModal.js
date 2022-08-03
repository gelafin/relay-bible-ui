import { React, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Provider, Portal, Dialog, Button, Paragraph } from 'react-native-paper';
import { sampleNotes } from '../pages/NotesPage';

// custom components
import { FormLabel } from './FormLabel';

/**
 * @param onSubmit: called with argument object
 *  {
 *    selectedVerses: [Verse]
 *  }
 */
const NoteFilterModal = ({setShouldShowDialog, onSubmit, onCancel, initialFilterSettings}) => {
  const [filterSettings, setFilterSettings] = useState(initialFilterSettings || {});
  const [selectedVersesTest, setSelectedVersesTest] = useState();
  const hideDialog = () => setShouldShowDialog(false);

  const handleCancel = () => {
    hideDialog();
    onCancel && onCancel();
  };

  function handleSubmit() {
    console.log('*submitting filter settings ', filterSettings);
    console.log('\twith selected verses ', filterSettings.selectedVerses);
    hideDialog();
    onSubmit(filterSettings);
  }

  // DEBUG
  useEffect(() => {
    console.log('\tselected verses changed:', filterSettings.selectedVerses);
    console.log('\t\tselected verses is now truthy?', !!filterSettings.selectedVerses);
    console.log('\t\tselected verses length', filterSettings.selectedVerses.length);
  }, [filterSettings.selectedVerses, filterSettings.selectedVerses[0]]);

  useEffect(() => console.log('\t*selectedVersesTest ', selectedVersesTest), [selectedVersesTest]);

  const handleRelatedVersesChange = newRelatedVerses => {
    // setFilterSettings((filterSettings) => ({...filterSettings, [...newRelatedVerses]}));

    // test with the deepest clone from the depths of sheol
    const TEST_SETTINGS = {selectedVerses: JSON.parse(JSON.stringify(newRelatedVerses))};
    console.log('\tsetting new filter settings ', TEST_SETTINGS);
    setFilterSettings(TEST_SETTINGS);
  };

  // TODO: remove after testing
  useEffect(() => {
    // const initVerses = sampleNotes[0].linkedVerses;
    const initVerses = [{reference: 'Matthew 5:5'}];
    console.log('DEBUG: on mount, setting linked verses to ', initVerses);
    handleRelatedVersesChange(initVerses);

    setSelectedVersesTest(initVerses);
  }, []);

  return (
    <Provider>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog}>
          <Dialog.Title>
            <Text>Filters</Text>
          </Dialog.Title>
          <Dialog.Content>
            <FormLabel label="Related verses"></FormLabel>
            <Text>TODO: button here to open verse selection modal, which will call handleRelatedVersesChange</Text>
            <View>{filterSettings?.selectedVerses?.map(verseObj => (
              <Text key={verseObj.reference}>{verseObj.reference}</Text>
            ))}</View>
            
            {/* TODO: debug why one of these conditions is met even after setting
            filterSettings.selectedVerses to a valid value? */}
            {/* if no selectedVerses */}
            {!filterSettings?.selectedVerses || filterSettings.selectedVerses.length < 1 &&
              <Text>none</Text>
            }
            {/* DEBUG */}
            <Text>filterSettings.selectedVerses: </Text>
            <Paragraph>{JSON.stringify(filterSettings?.selectedVerses)}</Paragraph>
            <Text>Independent selectedVersesTest: </Text>
            <Paragraph>{JSON.stringify(selectedVersesTest)}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => handleSubmit()}>Apply</Button>
            <Button onPress={handleCancel}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export { NoteFilterModal };
