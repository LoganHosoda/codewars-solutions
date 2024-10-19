// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// 
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// Regular ExpressionsStringsFundamentals
// 
// SOLUTION

function removeUrlAnchor(url){
  if(url.includes('#')) {
    const idx = url.indexOf('#');
    return url.slice(0, idx);
  }
  return url;
}
