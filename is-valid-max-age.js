(function(){

  function isValidMaxAge(birthDate, maxAge) {
    if (!(birthDate && maxAge)) return false;
    if (!(birthDate instanceof Date)) return false;
    if (!(typeof maxAge === 'number' || maxAge instanceof Number)) return false;
    var now = new Date();
    var minPrevDate = new Date(now.getFullYear() - maxAge, now.getMonth(), now.getDate()).setMonth(now.getMonth() - 1);
    var userPrevDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()).setMonth(birthDate.getMonth() - 1);
    return (minPrevDate <= userPrevDate);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidMaxAge;
  } else {
    window.isValidSSN = isValidMaxAge;
  }

})();
