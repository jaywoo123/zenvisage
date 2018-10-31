mvn clean
if [[ "$?" -ne 0 ]] ; then
  echo 'mvn clean failed. Exited with non-zero value';exit 42
fi
mvn install
if [[ "$?" -ne 0 ]] ; then
  echo 'mvn install failed. Exited with non-zero value '; exit 42
fi

echo 'test1'

cp lib/*.jar target/zenvisage/WEB-INF/lib/.

echo 'test2'

# run junit tests
sh scripts/run-test.sh

echo 'test3'
sudo sh run.sh
echo 'test4'
 # give zenvisage some time to start
sleep 10

#start selenium and protractor 
cd src/main/webapp
webdriver-manager start
protractor conf.js

