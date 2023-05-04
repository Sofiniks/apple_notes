export const handleErrorMessages = (error: any) => {
    let errorMessage = 'Incorrect login or password';
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'User not found';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect login or password';
        break;
      case 'auth/email-already-in-use':
        errorMessage = 'This email address is already in use.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Your password is too weak. Please use a stronger password.';
        break;
      default:
        errorMessage = error.message;
        break;
    }
    return errorMessage;
  }