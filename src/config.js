export const SERVER_CONFIG = {
  LOCAL: 'http://192.168.0.2:3000',
  PUBLIC: 'https://wholemeal-noncoercively-seymour.ngrok-free.dev',
  
  getServerUrl: async () => {
    try {
      const response = await fetch(`${SERVER_CONFIG.LOCAL}/get-centers`, {
        method: 'GET',
        signal: AbortSignal.timeout(3000),
      });
      
      if (response.ok) {
        console.log('✓ Using LOCAL server (WiFi)');
        return SERVER_CONFIG.LOCAL;
      }
    } catch (error) {
      console.log('⚠️ Local server not reachable, trying public...', error);
    }
    
    console.log('✓ Using PUBLIC server (Internet)');
    return SERVER_CONFIG.PUBLIC;
  }
};