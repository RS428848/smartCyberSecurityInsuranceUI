pipeline {
agent {
        label 'master'
    }  

    environment {
        /*--------------------------------
        Common Build Environment Variables
        --------------------------------*/
 
         DOCKER_REGISTRY_URL = 'https://nexus-gss.uscis.dhs.gov:1337'
         DOCKER_REGISTRY_BASE_URL = 'nexus-gss.uscis.dhs.gov:1337/'
         DOCKER_REGISTRY_CREDENTIAL_ID = 'docker-push'
         DOCKER_NAMESPACE = 'CCTS'
    }
    stages {
        stage('Startup') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Pull Code') {
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
    }
}