exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['dataSmoothing.spec.js','query.spec.js','basicCheck.spec.js','dynamicClass.spec.js'],
  capabilities: {'browserName': 'chrome', 
		'acceptInsecureCerts': true,
    		'chromeOptions': {
      			args:["--headless", "--disable-gpu", "window-size=1920, 1080", "--disable-browser-side-navigation"]

    		} 
	},
  getPageTimeout: 300000,
  allScriptsTimeout: 300000,
  jasmineNodeOpts: {
	defaultTimeoutInterval: 2500000
  }
}
