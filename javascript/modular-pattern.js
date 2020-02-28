//modular pattern 

var student = (function() {
  'use strict';

  var _registrationNo = '12333';
  var studentName = "demo";

  function _getRegistrationNo() {
    console.log(_registrationNo);
	return studentName + _registrationNo;
  }

  return {
    getStudent: function() {
      _getRegistrationNo();
    }
  };
})();

var sacoe = student.getStudent();

