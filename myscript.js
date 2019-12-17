
function isAnagram(str1, str2) {
  const reversed = str1.split('').reverse().join('');
  return reversed ===str2;
}