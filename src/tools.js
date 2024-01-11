export const generateSessionId = () => {
  // Generate a unique session ID
  if(!!crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    console.warn('crypto.randomUUID not available. Not a secure context?')
    return (Math.random() * 10000000).toString()
  }
};
