import { React, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Provider, Portal, Dialog, Button, Paragraph } from 'react-native-paper';

// custom components
import { FormLabel } from './FormLabel';

// custom util
import { createVerse } from '../../util/Verse';

const TEST_VERSES = [createVerse('Matthew', 5, 5)];
console.log('**TEST VERSES (has equals?)', TEST_VERSES);

/**
 * @param onSubmit: called with argument object
 *  {
 *    selectedVerses: [Verse]
 *  }
 */
const NoteFilterModal = ({setShouldShowDialog, onCancel, filterSettings, setFilterSettings}) => {
  const [selectedVersesTest, setSelectedVersesTest] = useState();
  const hideDialog = () => setShouldShowDialog(false);

  const handleCancel = () => {
    hideDialog();
    onCancel && onCancel();  // parent should undo changes
  };

  function handleSubmit() {
    console.log('*keeping filter settings ', filterSettings);
    console.log('\twith selected verses ', filterSettings.selectedVerses);
    hideDialog();

    // no need to submit to parent; parent state already updated
  }

  // DEBUG EVERY UPDATE
  useEffect(() => {
    console.log('\tselected verses:', JSON.stringify(filterSettings?.selectedVerses));
  });

  const handleRelatedVersesChange = newRelatedVerses => {
    console.log('\tnewRelatedVerses from TEST VERSES (has equals?)', newRelatedVerses);
    console.log('\tsetting new filter settings (HAS EQUALS?) ', {...filterSettings, selectedVerses: [...newRelatedVerses]});
    setFilterSettings((filterSettings) => ({...filterSettings, selectedVerses: [...newRelatedVerses]}));
  };

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
            <Text>filterSettings.selectedVerses... SAME EXACT expression as correctly updating js: </Text>
            <Paragraph>{JSON.stringify(filterSettings?.selectedVerses)}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => handleRelatedVersesChange(TEST_VERSES)}>Test Selected Verses</Button>
            <Button onPress={handleSubmit}>Apply</Button>
            <Button onPress={handleCancel}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export { NoteFilterModal };
