// Server configuration
export const SERVER_CONFIG = {
  // Local IP for WiFi users (offline)
  LOCAL: 'http://192.168.1.47:3000',
  
  // Public IP for internet users (online)
  PUBLIC: 'http://98.97.76.190:3000',
  
  // Auto-detect which server to use
  getServerUrl: async () => {
    // Try local first (for WiFi users)
    try {
      const response = await fetch(`${SERVER_CONFIG.LOCAL}/get-centers`, {
        method: 'GET',
        timeout: 3000, // 3 second timeout
      });
      
      if (response.ok) {
        console.log('✓ Using LOCAL server (WiFi)');
        return SERVER_CONFIG.LOCAL;
      }
    } catch (error) {
      console.log('⚠️ Local server not reachable, trying public...', error);
    }
    
    // If local fails, use public (for internet users)
    console.log('✓ Using PUBLIC server (Internet)');
    return SERVER_CONFIG.PUBLIC;
  }
};