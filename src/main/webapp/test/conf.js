exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['dataSmoothing.spec.js','query.spec.js','basicCheck.spec.js','dynamicClass.spec.js'],
  capabilities: {'browserName': 'chrome', 
		'acceptInsecureCerts': true,
    		'chromeOptions': {
      			args: ['--disable-browser-side-navigation'] 
    		} 
	},
  getPageTimeout: 30000,
  allScriptsTimeout: 30000
}
