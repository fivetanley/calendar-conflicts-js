var Calendar = function() {
};

Calendar.prototype = {

  parse: function(input) {
    var overlapped = [];

    var sortedInput = input.slice().sort((a, b) => {
      return a[0] < b[0];
    });

    sortedInput.forEach(function(timeSet, index) {
      var startTime = timeSet[0];
      var endTime = timeSet[1];

      var rest = sortedInput.slice(index + 1);

      console.log('rest!', rest);

      rest.forEach(function(restTimeSet) {
        var bStartTime = restTimeSet[0];
        var bEndTime = restTimeSet[1];

        var alreadyInOverlapped = overlapped.find(timeSet => {
          return startTime === timeSet[0] && endTime === timeSet[1];
        });

        if (startTime === bStartTime && endTime === bEndTime) {
          return;
        }

        if (!alreadyInOverlapped && startTime >= bStartTime && endTime <= bEndTime) {
          overlapped.push(timeSet);
        }
      });
    });

    return overlapped.map(o => `(${o[0]}, ${o[1]})`).join(' ');
  },

};

module.exports = Calendar;
