export function randomName() {
   
    const names = ["Alice", "Bob", "Charlie", "David", "Emily",];
    // Get a random index within the array bounds:
    const randomIndex = Math.floor(Math.random() * names.length);
  
    // Return the name at that random index:
    return names[randomIndex];
  }
  export function generateRandomString(length = 10, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }