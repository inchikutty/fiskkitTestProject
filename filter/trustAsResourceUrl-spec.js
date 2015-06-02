describe('trustAsResourceUrl', function() {

	beforeEach(module('fiskkitTestProject'));

	it('should be able to filter the input URL using $sce service', inject(function( $filter, $sce ) {

       var filter = $filter('trustAsResourceUrl');

		expect(filter('')).toBe($sce.trustAsResourceUrl(''));

	}));

});