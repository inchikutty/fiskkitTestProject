describe('trustAsResourceUrl', function() {

	beforeEach(module('fiskkitTestProject'));

	it('should ...', inject(function($filter) {

        var filter = $filter('trustAsResourceUrl');

		expect(filter('input')).toEqual('output');

	}));

});