import SnackBar from 'react-native-snackbar-dialog';

export function toast(message) {
  SnackBar.show(message, {
    duration: 1000,
    confirmText: 'Ok',
    tapToClose: true,
    onConfirm: () => {
      SnackBar.dismiss()
    }
  });
}