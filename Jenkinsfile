pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the Digital Clock repository...'
                git branch: 'main', url: 'https://github.com/Pravallika617/digitalclock.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Digital Clock website...'
                bat 'echo Build stage completed.'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image for Digital Clock...'
                bat '''
                    docker build -t digitalclock:latest .
                '''
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Running Docker Container for Digital Clock...'
                bat '''
                    docker stop digitalclock || echo "No existing container to stop"
                    docker rm digitalclock || echo "No existing container to remove"
                    docker run -d --name digitalclock -p 9090:80 digitalclock:latest
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment successful!'
                echo 'Open http://localhost:9090 in your browser to view the Digital Clock website.'
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully ✅'
        }
        failure {
            echo 'Pipeline failed ❌ — please check the logs for details.'
        }
    }
}
