var Calendar = require('./calendar');

describe('Testing Calendar Conflicts', function(done){
  describe('Calendar', function(){
    it('initializes a function', function(){
      var calendar = new Calendar();
      chai.expect(typeof calendar).to.be.equal('object');
    });

    describe('parsing a list of calendar times', function() {
      it('shows the times that overlaps', function() {

        var calendar = new Calendar();
        var input = [
          [1, 3],
          [12, 24],
          [2, 4],
          [13, 15],
          [5, 10]
        ];

        var output = '(1, 3), (12, 14), (2, 4), (13, 15)';

        var parsed = calendar.parse(input);

        console.log('parsed', parsed);
        console.log('output', output);

        chai.expect(calendar.parse(input)).to.equal(output);
      });
    });
  });
});
