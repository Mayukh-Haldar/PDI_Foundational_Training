# 📚 Bookstore CI/CD – Multi-Service DevOps Pipeline: Complete Jenkins Setup & Configuration Guide (Windows)

A complete CI/CD implementation for a microservices-based Bookstore application using:

* Flask (OpenAPI Generated Server)
* Spring Boot (Java Server)
* Docker
* Jenkins Pipeline
* GitHub Integration

This project demonstrates automated build, containerization, and deployment using Jenkins.

This section documents the exact system configuration and plugins required to successfully run this CI/CD pipeline.

---

# ✅ 1. System Requirements

Before installing Jenkins, make sure your system has the following installed:

## 🔹 Required Software

* Java 17 (minimum)
* Java 21 (also configured and supported)
* Git
* Docker Desktop (must be running)
* Maven (for Java builds)
* Python (required for ShiningPanda plugin support)
* Node (optional)

---


# 🏗️ Architecture Overview

GitHub → Jenkins → Build → Dockerize → Run Containers

Two independent services:

* Flask OpenAPI Server
* Spring Boot Java Server

Both are containerized and deployed automatically via Jenkins Pipeline.

---

# 🧩 Tech Stack

| Layer             | Technology                  |
| ----------------- | --------------------------- |
| CI/CD             | Jenkins                     |
| Version Control   | GitHub                      |
| Backend 1         | Flask + Connexion (OpenAPI) |
| Backend 2         | Spring Boot                 |
| Build Tool        | Maven                       |
| Containerization  | Docker                      |
| API Documentation | Swagger UI                  |

---

# 📁 Project Structure

```
Week_1/
 └── Day_3_and_4/
      ├── flask_server/
      │    ├── Dockerfile
      │    ├── requirements.txt
      │    └── openapi_server/
      ├── java_server/
      │    ├── Dockerfile
      │    └── pom.xml
      └── Jenkinsfile
```

## 2️⃣ Jenkins Pipeline Stages

Pipeline executes:

1. Checkout Source Code
2. Install Tools (JDK, Maven)
3. Build Java Application
4. Build Flask Docker Image
5. Build Java Docker Image
6. Run Containers
7. Post Build Actions

---

# 📊 Example Jenkins Stage View

Pipeline successfully builds:

* Flask Service
* Java Service
* Docker Images
* Running Containers

# 💻 Installation Paths Used in This Setup (Windows)

These are the exact paths configured:

### 🔹 JDK 21

Name: jdk-21

Path:
```
C:\Users\<user_name>\.jdks\ms-21.0.9
```

### 🔹 Maven 3.9
Name: maven-3

Path:

```
C:\Program Files\maven\apache-maven-3.9.12
```

### 🔹 Python 3.10
Name: python-3.10

Path:

```
C:\Users\<user_name>\AppData\Local\Programs\Python\Python310
```

Make sure these paths exist on your system before configuring Jenkins.

---

# ✅ 2. Install Jenkins (Windows)

## Step 1 – Install Java

Verify installation:

```
java -version
```

---

## Step 2 – Install Jenkins

Download from:
[https://www.jenkins.io/download/](https://www.jenkins.io/download/)

Install as Windows Service.

---

## Step 3 – Unlock Jenkins

Open in browser:

```
http://localhost:8080
```

Get initial password from:

```
C:\ProgramData\Jenkins\.jenkins\secrets\initialAdminPassword
```

using the following command in cmd:

```cmd
type C:\ProgramData\Jenkins\.jenkins\secrets\initialAdminPassword
```
Then:

* Install suggested plugins
* Create first admin user

---

# ✅ 3. Required Jenkins Plugins

Go to:

Manage Jenkins → Manage Plugins

Install the following plugins:

---

## 🔹 Core Required

* Git Plugin
* GitHub Plugin
* Pipeline Plugin
* Pipeline Stage View Plugin

---

## 🔹 For Docker

* Docker Plugin
* Docker Pipeline Plugin

---

## 🔹 For Java Build

* Maven Integration Plugin

---

## 🔹 For Credentials

* Credentials Plugin
* Credentials Binding Plugin

---

## 🔹 For Python (Mandatory in this Setup)

* ShiningPanda Plugin

This plugin allows Jenkins to configure and manage Python installations.

Even though Flask is Dockerized, ShiningPanda was configured for Python tool management.

---

# ✅ 4. Global Tool Configuration

Go to:

Manage Jenkins → Global Tool Configuration

---

## 🔹 Configure Git

Add Git installation:

Name:

```
Default
```

Path:
Auto-detected (usually C:\Program Files\Git\bin\git.exe)

---

## 🔹 Configure JDK

Add two JDK installations:

### JDK 21

Name:

```
jdk-21
```

Path:

```
C:\Users\<user_name>\.jdks\ms-21.0.9
```

---

## 🔹 Configure Maven

Add Maven:

Name:

```
maven-3
```

Path:

```
C:\Program Files\maven\apache-maven-3.9.12
```

---

## 🔹 Configure Python (ShiningPanda)

Add Python installation:

Name:

```
python-3.10
```

Home:

```
C:\Users\<user_name>\AppData\Local\Programs\Python\Python310
```

Save configuration.

---

# ✅ 5. Setup GitHub Credentials (Very Important)

## Step 1 – Create GitHub Personal Access Token

Go to:

GitHub → Settings → Developer Settings → Personal Access Tokens → Personal Access Tokens(Classic) → Repo Access Only → Generate

Generate token with permissions:

* repo

Copy the generated token.

---

## Step 2 – Add Credentials in Jenkins

Go to:

Manage Jenkins → Credentials → Global → Add Credentials

Type:
Username with password

Username:
Your GitHub username

Password:
Your GitHub Personal Access Token

ID:

```
github-token
```

Save.

---

# ✅ 6. Docker Setup for Jenkins

Jenkins must be able to access Docker daemon.

---

## Step 1 – Install Docker Desktop

Verify:

```
docker version
```

---

## Step 2 – Start Docker Desktop

Docker Desktop must be running.

If not, Jenkins will fail with:

```
failed to connect to docker API
```

---

## Step 3 – Enable WSL2 Backend (Windows)

Ensure Docker Desktop uses WSL2 backend.

This allows Jenkins service to communicate with Docker.

---

# ✅ 7. Create Pipeline Job

Go to:

New Item → Pipeline

Name:

```
Bookstore-CI-CD
```

Click OK.

---

## 🔹 Pipeline Configuration

Definition:

```
Pipeline script from SCM
```

SCM:

```
Git
```

Repository URL:

```
https://github.com/Mayukh-Haldar/PDI_Foundational_Training.git
```

Credentials:

Select:

```
github-token
```

Branch:

```
*/main
```

Script Path:

```
Week_1/Day_3_and_4/Jenkinsfile
```

Lightweight Checkout:

Enabled

Click Save.

---

# ✅ 8. Jenkinsfile Structure (Final Working Setup)

Pipeline stages:

1. Checkout SCM
2. Tool Install (JDK, Maven)
3. Build Flask Docker Image
4. Build Java Docker Image
5. Run Containers
6. Post Actions

Note:

Flask is fully Dockerized.

Python virtual environment is not required inside Jenkins build steps.

---

# ✅ 9. Common Errors & Fixes

## ❌ Git Authentication Failed

Fix:
Use GitHub Personal Access Token instead of password.

---

## ❌ Could not find revision master

Fix:
Set branch to:

```
*/main
```

---

## ❌ Python ast.Str Error

Cause:
Using Python latest (3.14)

Fix:
Pin version in Dockerfile:

```
FROM python:3.10
```

Never use latest tag.

---

## ❌ Docker Daemon Not Running

Error:

```
failed to connect to docker API
```

Fix:
Start Docker Desktop.

---

## ❌ Containers Not Running Together

Cause:
Flask container crashed due to incompatible Python version.

Fix:
Pin Python to 3.10.

---

# ✅ 10. Final Working Architecture

Pipeline Flow:

GitHub → Jenkins → Build Java → Build Flask → Build Docker Images → Run Containers

---

## Running Containers

| Container | Port |
| --------- | ---- |
| Flask     | 5000 |
| Java      | 8081 |

---

## Swagger URLs

Flask:

```
http://localhost:5000/api/v1/ui/
```

Java:

```
http://localhost:8081/swagger-ui/index.html
```

---

# ✅ 11. Production Best Practices

* Always pin Docker base image versions
* Never use latest tag
* Use credentials binding
* Keep Jenkins and Docker updated
* Separate build and runtime images
* Avoid running Jenkins as admin
* Use multi-stage Docker builds

---

# 🎯 Final Result

This setup successfully delivers:

* Fully automated CI/CD
* Multi-service microservices architecture
* Java + Flask backend
* Dockerized builds
* Jenkins Pipeline execution
* GitHub integration
* Swagger API documentation access
* Version-controlled environment setup