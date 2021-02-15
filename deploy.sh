cd /opt/tomcat
bin/shutdown.sh
cd webapps 
rm -rf ROOT/
cp ~/build/jenkins.war ./jenkins.war
rm -rf jenkins
cd ..
bin/startup.sh