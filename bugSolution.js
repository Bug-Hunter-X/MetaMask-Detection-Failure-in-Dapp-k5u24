function checkIfWalletIsConnected() {
  // Wait for the 'ethereum' object to be available.
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        console.log('Wallet is connected!');
      } else {
        console.log('Wallet disconnected!');
      }
    });
  } else {
    console.log('Make sure you have metamask!');
  }
} 