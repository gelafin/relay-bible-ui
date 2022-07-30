import { React, useState } from 'react';
import { Provider, Portal, Dialog, Button, Paragraph } from 'react-native-paper';

// custom components
import { FormLabel } from '../common/FormLabel';
import { SingletonInputFormText } from '../common/SingletonInputFormText';

/**
 * @param onSubmit: called with argument object {title: string, body: string, linkedVerses: string[], isPublic: bool}
 */
const NoteEditDialog = ({setShouldShowDialog, onSubmit, onCancel, initialNoteData}) => {
  const [noteData, setNoteData] = useState(initialNoteData || {});
  const hideDialog = () => setShouldShowDialog(false);

  const handleCancel = () => {
    hideDialog();
    onCancel && onCancel();
  };

  const handleSubmit = () => {
    hideDialog();
    onSubmit(noteData);
  };

  return (
    <Provider>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog}>
          <Dialog.Title>
            {/* note title. TODO: use placeholder text instead of FormLable */}
            <FormLabel label="title"></FormLabel>
            <SingletonInputFormText
              currentValue={noteData?.title || ''}
              handleChange={(text) => setNoteData({...noteData, title: text})}
            ></SingletonInputFormText>
          </Dialog.Title>
          <Dialog.Content>
            {/* note body */}
            <SingletonInputFormText
              currentValue={noteData?.body || ''}
              handleChange={(text) => setNoteData({...noteData, body: text})}
              autoHeight
              multiline
            ></SingletonInputFormText>

            {/* linked verses */}
            {/* TODO: use verse selection modal, based on chapter selection modal */}
            {/* TODO: use a prop array of verses if context from reading page is available */}
            <FormLabel label="link to verses"></FormLabel>
            <Paragraph>csv text only for now, because time. Use comma-space</Paragraph>
            <SingletonInputFormText
              currentValue={noteData?.linkedVerses?.join(', ')}
              handleChange={(text) => setNoteData({...noteData, linkedVerses: text.split(', ')})}
              autoHeight
              multiline
            ></SingletonInputFormText>

            {/* TODO: checkbox for isPublic */}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleSubmit}>Create</Button>
            <Button onPress={handleCancel}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export { NoteEditDialog };
