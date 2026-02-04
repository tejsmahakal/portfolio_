pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/tejsmahakal/portfolio.git'
            }
        }

        stage('Build Images') {
            steps {
                sh '''
                docker build -t portfolio-backend ./backend
                docker build -t portfolio-frontend ./frontend
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker-compose down || true
                docker-compose up -d
                '''
            }
        }
    }
}
