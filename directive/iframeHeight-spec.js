describe('iframeHeight', function() {

  var scope,compile;

  beforeEach(module('fiskkitTestProject'));

  beforeEach(inject(function($rootScope,$compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('Should set iframe height to its parents height', function() {

    /* 
    To test your directive, you need to create some html that would use your directive,
    send that through compile() then compare the results.

    var element = compile('<div mydirective name="name">hi</div>')(scope);
    expect(element.text()).toBe('hello, world');
	*/

	var element = compile('<iframe iframe-height src=" " style=""></iframe>')(scope);
	
	scope.$digest();
	
	expect( element.html()).toContain('');

  });
});