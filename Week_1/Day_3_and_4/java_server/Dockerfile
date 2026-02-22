# Use official Eclipse Temurin JDK 21 image
FROM eclipse-temurin:21-jdk

# Create working directory inside container
WORKDIR /app

# Copy built jar from target folder
COPY target/*.jar app.jar

# Expose Spring Boot port
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]