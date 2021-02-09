cd /opt/tomcat
bin/shutdown.sh
cd webapps 
rm -rf ROOT/
cp ~/build/jenkins.war ./jenkins.war
cd ..
bin/startup.sh