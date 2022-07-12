import { React } from 'react';
import { Provider, Portal, Dialog, Paragraph, Button } from 'react-native-paper';

const ConfirmDialog = ({title, description, shouldShowDialog, setShouldShowDialog, onConfirm, onCancel}) => {
  const hideDialog = () => setShouldShowDialog(false);

  const handleCancel = () => {
    hideDialog();
    onCancel && onCancel();
  };

  const handleConfirm = () => {
    hideDialog();
    onConfirm();
  };

  return (
    <Provider>
      <Portal>
        <Dialog visible={shouldShowDialog} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{description}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleConfirm}>Confirm</Button>
            <Button onPress={handleCancel}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export { ConfirmDialog };
